export function initializeBookingValidation() {
	const form = document.querySelector("#booking-form");
	if (!form) return;

	const fields = [
		{ input: form.elements.namedItem("name"), error: form.querySelector("#name-error") },
		{ input: form.elements.namedItem("email"), error: form.querySelector("#email-error") },
		{ input: form.elements.namedItem("phone"), error: form.querySelector("#phone-error") },
		{ input: form.elements.namedItem("service"), error: form.querySelector("#service-error") },
		{ input: form.elements.namedItem("date"), error: form.querySelector("#date-error") }
	];
	const feedback = form.querySelector("#booking-feedback");
	if (fields.some(({ input, error }) => !input || !error) || !feedback) return;

	const today = new Date();
	today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
	const earliestDate = today.toISOString().slice(0, 10);
	form.elements.namedItem("date").min = earliestDate;

	const validateField = ({ input, error }) => {
		const value = input.value.trim();
		let message = "";

		if (input.name === "name") {
			const allowedName = /^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u;
			const letterCount = (value.match(/[\p{L}\p{M}]/gu) || []).length;
			if (!value) message = "Please enter your full name.";
			else if (!allowedName.test(value) || letterCount < 2) message = "Enter a name using at least two letters. You may use spaces, apostrophes, or hyphens.";
		} else if (input.name === "email") {
			input.value = value;
			if (!value) message = "Please enter your email address.";
			else if (input.validity.typeMismatch) message = "Enter a valid email address, such as name@example.com.";
		} else if (input.name === "phone") {
			const digitCount = value.replace(/\D/g, "").length;
			const allowedPhoneCharacters = /^\+?[\d\s().-]+$/;
			if (!value) message = "Please enter your phone number.";
			else if (!allowedPhoneCharacters.test(value) || digitCount < 7 || digitCount > 15) {
				message = "Use a valid phone number with 7 to 15 digits. Spaces, parentheses, hyphens, and a leading plus sign are allowed.";
			}
		} else if (input.name === "service") {
			if (!value) message = "Please select a service.";
		} else if (input.name === "date") {
			if (!value) message = "Please choose an appointment date.";
			else if (value < earliestDate) message = "Please choose today or a future date.";
		}

		error.textContent = message;
		input.setAttribute("aria-invalid", String(Boolean(message)));
		return !message;
	};

	fields.forEach((field) => {
		const eventName = field.input.tagName === "SELECT" ? "change" : "input";
		field.input.addEventListener(eventName, () => {
			validateField(field);
			feedback.textContent = "";
			feedback.removeAttribute("data-state");
		});
		field.input.addEventListener("blur", () => validateField(field));
	});

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		feedback.textContent = "";
		feedback.removeAttribute("data-state");

		const invalidFields = fields.filter((field) => !validateField(field));
		if (invalidFields.length) {
			feedback.textContent = `Please review the ${invalidFields.length === 1 ? "highlighted field" : "highlighted fields"} and try again.`;
			feedback.dataset.state = "error";
			invalidFields[0].input.focus();
			return;
		}

		const name = form.elements.namedItem("name").value.trim();
		feedback.textContent = `Thank you, ${name}. Your booking details are valid. This demo form does not send appointment requests, so please contact UrbanGlow Salon to confirm your booking.`;
		feedback.dataset.state = "success";
		feedback.focus();
	});
}