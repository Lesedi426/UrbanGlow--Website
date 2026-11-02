export function initializeAccordion() {
	document.querySelectorAll("[data-accordion]").forEach((accordion) => {
		const triggers = [...accordion.querySelectorAll(".accordion-trigger")];

		if (!triggers.length) return;

		accordion.classList.add("accordion-ready");

		triggers.forEach((trigger) => {
			const panel = document.getElementById(trigger.getAttribute("aria-controls"));
			if (!panel) return;

			const expanded = trigger.getAttribute("aria-expanded") === "true";
			panel.style.maxHeight = expanded ? `${panel.scrollHeight}px` : "0px";
			panel.setAttribute("aria-hidden", String(!expanded));

			trigger.addEventListener("click", () => {
				const isExpanded = trigger.getAttribute("aria-expanded") === "true";
				trigger.setAttribute("aria-expanded", String(!isExpanded));
				panel.setAttribute("aria-hidden", String(isExpanded));
				panel.style.maxHeight = isExpanded ? "0px" : `${panel.scrollHeight}px`;
			});
		});

		window.addEventListener("resize", () => {
			triggers.forEach((trigger) => {
				if (trigger.getAttribute("aria-expanded") !== "true") return;
				const panel = document.getElementById(trigger.getAttribute("aria-controls"));
				if (panel) panel.style.maxHeight = `${panel.scrollHeight}px`;
			});
		});
	});
}

export function initializeTabs() {
	document.querySelectorAll('[role="tablist"]').forEach((tabList) => {
		const tabs = [...tabList.querySelectorAll('[role="tab"]')];
		const panels = tabs
			.map((tab) => document.getElementById(tab.getAttribute("aria-controls")))
			.filter(Boolean);

		if (!tabs.length || panels.length !== tabs.length) return;

		const activateTab = (activeTab, moveFocus = false) => {
			tabs.forEach((tab) => {
				const isActive = tab === activeTab;
				tab.setAttribute("aria-selected", String(isActive));
				tab.tabIndex = isActive ? 0 : -1;

				const panel = document.getElementById(tab.getAttribute("aria-controls"));
				panel.hidden = !isActive;
			});

			if (moveFocus) activeTab.focus();
		};

		const selectedTab = tabs.find((tab) => tab.getAttribute("aria-selected") === "true") || tabs[0];
		activateTab(selectedTab);

		tabs.forEach((tab) => {
			tab.addEventListener("click", () => activateTab(tab));
			tab.addEventListener("keydown", (event) => {
				const availableTabs = [...tabList.querySelectorAll('[role="tab"]')].filter((item) => !item.hidden);
				const currentIndex = availableTabs.indexOf(tab);
				if (currentIndex < 0) return;

				let nextIndex;

				if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % availableTabs.length;
				else if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + availableTabs.length) % availableTabs.length;
				else if (event.key === "Home") nextIndex = 0;
				else if (event.key === "End") nextIndex = availableTabs.length - 1;
				else return;

				event.preventDefault();
				activateTab(availableTabs[nextIndex], true);
			});
		});
	});
}