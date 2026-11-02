const initializeGalleryLightbox = () => {
	const links = [...document.querySelectorAll(".gallery-item")];
	const dialog = document.querySelector("#gallery-lightbox");
	const image = dialog?.querySelector(".lightbox-image");
	const caption = dialog?.querySelector(".lightbox-caption");
	const counter = dialog?.querySelector(".lightbox-count");
	const closeButton = dialog?.querySelector(".lightbox-close");
	const previousButton = dialog?.querySelector(".lightbox-previous");
	const nextButton = dialog?.querySelector(".lightbox-next");

	if (!links.length || !(dialog instanceof HTMLDialogElement) || !image || !caption || !counter) return;
	if (typeof dialog.showModal !== "function") return;

	let activeIndex = 0;
	let returnFocusTo = null;
	let isClosing = false;
	let closeTimer;

	const displayImage = (index) => {
		activeIndex = (index + links.length) % links.length;
		const link = links[activeIndex];
		const thumbnail = link.querySelector("img");
		const figure = link.closest("figure");

		image.src = link.href;
		image.alt = thumbnail?.alt || "Salon gallery image";
		caption.textContent = figure?.querySelector("figcaption")?.textContent.trim() || image.alt;
		counter.textContent = `${activeIndex + 1} of ${links.length}`;
	};

	const closeLightbox = () => {
		if (!dialog.open || isClosing) return;

		isClosing = true;
		dialog.classList.remove("is-visible");
		dialog.classList.add("is-closing");

		const finishClose = () => {
			if (dialog.open) dialog.close();
			window.clearTimeout(closeTimer);
			dialog.classList.remove("is-visible", "is-closing");
			document.body.classList.remove("lightbox-open");
			returnFocusTo?.focus();
			isClosing = false;
		};

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			finishClose();
		} else {
			closeTimer = window.setTimeout(finishClose, 240);
		}
	};

	const openLightbox = (event, index) => {
		event.preventDefault();
		if (dialog.open) return;

		returnFocusTo = links[index];
		displayImage(index);
		document.body.classList.add("lightbox-open");
		dialog.showModal();

		window.requestAnimationFrame(() => {
			dialog.classList.add("is-visible");
		});

		closeButton?.focus();
	};

	links.forEach((link, index) => {
		link.addEventListener("click", (event) => openLightbox(event, index));
	});

	previousButton?.addEventListener("click", () => {
		if (!isClosing) displayImage(activeIndex - 1);
	});

	nextButton?.addEventListener("click", () => {
		if (!isClosing) displayImage(activeIndex + 1);
	});

	closeButton?.addEventListener("click", closeLightbox);

	dialog.addEventListener("click", (event) => {
		if (event.target === dialog) closeLightbox();
	});

	document.addEventListener("keydown", (event) => {
		if (!dialog.open) return;

		if (event.key === "Escape") {
			event.preventDefault();
			closeLightbox();
		} else if (!isClosing && event.key === "ArrowLeft") {
			event.preventDefault();
			displayImage(activeIndex - 1);
		} else if (!isClosing && event.key === "ArrowRight") {
			event.preventDefault();
			displayImage(activeIndex + 1);
		}
	});

};

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initializeGalleryLightbox, { once: true });
} else {
	initializeGalleryLightbox();
}