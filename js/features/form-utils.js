export function validateField(input) {
	const error = document.getElementById(`${input.id}-error`);
	if (!error) return true;

	const value = input.value.trim();
	let message = "";

	if (input.required && !value) {
		message = "Please complete this field.";
	} else if (!value) {
		message = "";
	} else if (input.dataset.validate === "name") {
		const allowedName = /^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u;
		const letterCount = (value.match(/[\p{L}\p{M}]/gu) || []).length;
		if (!allowedName.test(value) || letterCount < 2) {
			message = "Enter a name using at least two letters. Spaces, apostrophes, and hyphens are allowed.";
		}
	} else if (input.dataset.validate === "email" && input.validity.typeMismatch) {
		message = "Enter a valid email address, such as name@example.com.";
	} else if (input.dataset.validate === "phone") {
		const digitCount = value.replace(/\D/g, "").length;
		const allowedCharacters = /^\+?[\d\s().-]+$/;
		if (!allowedCharacters.test(value) || digitCount < 7 || digitCount > 15) {
			message = "Use a valid phone number with 7 to 15 digits. Spaces, parentheses, hyphens, and a leading plus are allowed.";
		}
	} else if (input.dataset.validate === "message") {
		const minimum = Number(input.minLength) || 0;
		const maximum = Number(input.maxLength) || Infinity;
		if (value.length < minimum) message = `Please enter at least ${minimum} characters.`;
		else if (value.length > maximum) message = `Please keep your message to ${maximum} characters or fewer.`;
	}

	error.textContent = message;
	input.setAttribute("aria-invalid", String(Boolean(message)));
	return !message;
}

export function initializeFormValidation(form) {
	form.noValidate = true;
	const fields = [...form.querySelectorAll("[data-validate]")];
	const feedback = form.querySelector(".form-feedback");

	fields.forEach((field) => {
		const eventName = field.tagName === "SELECT" ? "change" : "input";
		field.addEventListener(eventName, () => {
			validateField(field);
			if (feedback) {
				feedback.replaceChildren();
				feedback.removeAttribute("data-state");
			}
			updateCharacterCount(field);
		});
		field.addEventListener("blur", () => validateField(field));
		updateCharacterCount(field);
	});

	form.addEventListener("reset", () => {
		window.setTimeout(() => {
			fields.forEach((field) => {
				field.removeAttribute("aria-invalid");
				const error = document.getElementById(`${field.id}-error`);
				if (error) error.textContent = "";
				updateCharacterCount(field);
			});
			feedback?.replaceChildren();
			feedback?.removeAttribute("data-state");
		}, 0);
	});

	return {
		feedback,
		validate: () => {
			const invalidFields = fields.filter((field) => !validateField(field));
			return { valid: invalidFields.length === 0, invalidFields };
		}
	};
}

export function updateCharacterCount(field) {
	const targetId = field.dataset.countTarget;
	if (!targetId) return;

	const counter = document.getElementById(targetId);
	if (counter) counter.textContent = `${field.value.trim().length} / ${field.maxLength} characters (minimum ${field.minLength})`;
}

export function showFormFeedback(feedback, message, state, linkDetails) {
	feedback.replaceChildren(document.createTextNode(message));
	feedback.dataset.state = state;

	if (linkDetails) {
		feedback.append(document.createTextNode(" "));
		const link = document.createElement("a");
		link.href = linkDetails.href;
		link.textContent = linkDetails.label;
		feedback.append(link);
	}

	feedback.focus();
}

export function createMailtoLink(recipient, subject, body) {
	return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function submitToConfiguredEndpoint(form) {
	const endpoint = form.dataset.ajaxEndpoint?.trim();
	if (!endpoint) return null;

	const endpointUrl = new URL(endpoint, window.location.href);
	if (!["http:", "https:"].includes(endpointUrl.protocol)) {
		throw new Error("The configured form endpoint must use HTTP or HTTPS.");
	}

	const response = await fetch(endpointUrl, {
		method: "POST",
		body: new FormData(form),
		headers: { Accept: "application/json" }
	});

	if (!response.ok) throw new Error("The submission service did not accept the form.");
	return response;
}