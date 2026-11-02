export function initializeModal() {
	const openers = document.querySelectorAll("[data-modal-open]");

	openers.forEach((opener) => {
		const modal = document.querySelector(opener.getAttribute("data-modal-open"));
		if (!(modal instanceof HTMLDialogElement)) return;

		let returnFocusTo = null;

		const closeModal = () => {
			if (!modal.open) return;

			modal.close();
			document.body.classList.remove("modal-open");
			returnFocusTo?.focus();
		};

		opener.addEventListener("click", (event) => {
			if (typeof modal.showModal !== "function") return;

			event.preventDefault();
			returnFocusTo = opener;
			document.body.classList.add("modal-open");
			modal.showModal();
			modal.querySelector("[data-modal-close]")?.focus();
		});

		modal.querySelectorAll("[data-modal-close]").forEach((closeButton) => {
			closeButton.addEventListener("click", closeModal);
		});

		modal.addEventListener("click", (event) => {
			if (event.target === modal) closeModal();
		});

		document.addEventListener("keydown", (event) => {
			if (modal.open && event.key === "Escape") {
				event.preventDefault();
				closeModal();
			}
		});
	});
}