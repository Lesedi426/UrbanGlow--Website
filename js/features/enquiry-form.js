import {
	createMailtoLink,
	initializeFormValidation,
	showFormFeedback,
	submitToConfiguredEndpoint
} from "./form-utils.js";

const recipient = "info@urbanglowsalon.co.za";

const enquiryGuidance = (type, service) => {
	if (type === "Salon services") {
		return `Your enquiry is about ${service}. View the existing service descriptions on the Services page; the salon can confirm further details.`;
	}
	if (type === "Products") {
		return "The website does not list a product catalogue. The salon will need to confirm product information.";
	}
	if (type === "Pricing") {
		return "The Pricing page contains the existing listed grooming prices. Prices may change, so contact the salon to confirm current details.";
	}
	return "The website does not publish live appointment availability. The salon needs to confirm availability for your requested time.";
};

export function initializeEnquiryForm() {
	const form = document.querySelector("#enquiry-form");
	if (!form) return;

	const { feedback, validate } = initializeFormValidation(form);
	if (!feedback || !validate) return;

	form.addEventListener("submit", async (event) => {
		event.preventDefault();
		const result = validate();
		if (!result.valid) {
			showFormFeedback(feedback, "Please correct the highlighted fields before continuing.", "error");
			result.invalidFields[0]?.focus();
			return;
		}

		const name = form.elements.namedItem("name").value.trim();
		const email = form.elements.namedItem("email").value.trim();
		const phone = form.elements.namedItem("phone").value.trim();
		const type = form.elements.namedItem("enquiryType").value;
		const service = form.elements.namedItem("service").value;
		const message = form.elements.namedItem("message").value.trim();
		const subject = `UrbanGlow Salon enquiry: ${type}`;
		const body = [
			`Enquiry type: ${type}`,
			`Service of interest: ${service}`,
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
				showFormFeedback(feedback, `Your enquiry was accepted by the configured submission service. ${enquiryGuidance(type, service)}`, "success");
				return;
			}

			const draft = createMailtoLink(recipient, subject, body);
			showFormFeedback(
				feedback,
				`Your enquiry is valid but has not been sent because no submission service is configured. ${enquiryGuidance(type, service)}`,
				"notice",
				{ href: draft, label: "Open a pre-filled email draft" }
			);
		} catch {
			showFormFeedback(feedback, "The configured submission service could not accept this enquiry. No message was sent; please try again or email the salon directly.", "error");
		} finally {
			submitButton.disabled = false;
		}
	});
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initializeEnquiryForm, { once: true });
} else {
	initializeEnquiryForm();
}