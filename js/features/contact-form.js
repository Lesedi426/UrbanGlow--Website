import {
	createMailtoLink,
	initializeFormValidation,
	showFormFeedback,
	submitToConfiguredEndpoint
} from "./form-utils.js";

const recipient = "info@urbanglowsalon.co.za";

export function initializeContactForm() {
	const form = document.querySelector("#contact-form");
	if (!form) return;

	const { feedback, validate } = initializeFormValidation(form);
	if (!feedback || !validate) return;

	form.addEventListener("submit", async (event) => {
		event.preventDefault();
		const result = validate();
		if (!result.valid) {
			showFormFeedback(feedback, "Please correct the highlighted fields before preparing your email.", "error");
			result.invalidFields[0]?.focus();
			return;
		}

		const name = form.elements.namedItem("name").value.trim();
		const email = form.elements.namedItem("email").value.trim();
		const phone = form.elements.namedItem("phone").value.trim();
		const messageType = form.elements.namedItem("messageType").value;
		const message = form.elements.namedItem("message").value.trim();
		const subject = `UrbanGlow Salon contact: ${messageType}`;
		const body = [
			`Message type: ${messageType}`,
			`Name: ${name}`,
			`Email: ${email}`,
			`Phone: ${phone}`,
			"",
			"Message:",
			message
		].join("\n");

		const submitButton = form.querySelector('[type="submit"]');
		submitButton.disabled = true;
		try {
			const response = await submitToConfiguredEndpoint(form);
			if (response) {
				showFormFeedback(feedback, "The configured submission service accepted your contact message.", "success");
				return;
			}

			showFormFeedback(
				feedback,
				"Your details have been compiled into an email draft. This website has not sent the message; send it from your email application to contact the salon.",
				"notice",
				{ href: createMailtoLink(recipient, subject, body), label: "Open pre-filled email draft" }
			);
		} catch {
			showFormFeedback(feedback, "The configured submission service could not accept your message. No message was sent; please use the email draft fallback.", "error");
			feedback.append(document.createTextNode(" "));
			const fallback = document.createElement("a");
			fallback.href = createMailtoLink(recipient, subject, body);
			fallback.textContent = "Open pre-filled email draft";
			feedback.append(fallback);
		} finally {
			submitButton.disabled = false;
		}
	});
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initializeContactForm, { once: true });
} else {
	initializeContactForm();
}