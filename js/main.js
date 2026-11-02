import { initializeAccordion, initializeTabs } from "./components/accordion-tabs.js";
import { initializeModal } from "./components/modal.js";
import { initializeServiceDirectory } from "./features/content-loader.js";
import { initializeBookingValidation } from "./features/booking-validation.js";

const initializeInteractiveFeatures = () => {
	initializeAccordion();
	initializeTabs();
	initializeServiceDirectory();
	initializeBookingValidation();
	initializeModal();
};

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initializeInteractiveFeatures, { once: true });
} else {
	initializeInteractiveFeatures();
}