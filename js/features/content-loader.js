export function initializeServiceDirectory() {
	const directory = document.querySelector("[data-service-directory]");
	if (!directory) return;

	const tabList = directory.querySelector('[role="tablist"]');
	const searchInput = directory.querySelector("#service-search");
	const sortSelect = directory.querySelector("#service-sort");
	const noResults = directory.querySelector(".service-no-results");
	if (!tabList || !searchInput || !sortSelect || !noResults) return;

	// Existing panel headings and copy remain the source data for these controls.
	const services = [...tabList.querySelectorAll('[role="tab"]')]
		.map((tab, originalIndex) => {
			const panel = document.getElementById(tab.getAttribute("aria-controls"));
			const name = panel?.querySelector("h3")?.textContent.trim();
			return panel && name ? { tab, panel, name, originalIndex } : null;
		})
		.filter(Boolean);

	if (!services.length) return;

	const updateDirectory = () => {
		const query = searchInput.value.trim().toLocaleLowerCase();
		const matches = services.filter((service) => service.name.toLocaleLowerCase().includes(query));
		const orderedServices = [...services].sort((first, second) => {
			if (sortSelect.value === "az") return first.name.localeCompare(second.name);
			return first.originalIndex - second.originalIndex;
		});

		orderedServices.forEach(({ tab }) => tabList.append(tab));
		services.forEach(({ tab, panel, name }) => {
			const isMatch = name.toLocaleLowerCase().includes(query);
			tab.hidden = !isMatch;
			if (!isMatch) panel.hidden = true;
		});

		const hasResults = matches.length > 0;
		tabList.hidden = !hasResults;
		noResults.hidden = hasResults;

		if (!hasResults) {
			services.forEach(({ tab, panel }) => {
				tab.setAttribute("aria-selected", "false");
				tab.tabIndex = -1;
				panel.hidden = true;
			});
			return;
		}

		const selectedService = matches.find(({ tab }) => tab.getAttribute("aria-selected") === "true");
		const nextService = selectedService || orderedServices.find((service) => matches.includes(service));
		nextService?.tab.click();
	};

	searchInput.addEventListener("input", updateDirectory);
	sortSelect.addEventListener("change", updateDirectory);
	updateDirectory();
}