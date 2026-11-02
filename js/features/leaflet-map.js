const initializePretoriaAreaMap = async () => {
	const mapElement = document.querySelector("#leaflet-map");
	const mapSection = mapElement?.closest(".location-map");
	const status = mapSection?.querySelector(".map-status");
	if (!mapElement || !mapSection || !status) return;

	const leaflet = window.L;
	if (!leaflet) {
		status.textContent = "The interactive map is unavailable. The general area map is shown below.";
		return;
	}

	status.textContent = "Loading the general Pretoria area map…";

	try {
		const geocodeUrl = new URL("https://nominatim.openstreetmap.org/search");
		geocodeUrl.search = new URLSearchParams({
			q: "Pretoria, Gauteng, South Africa",
			format: "jsonv2",
			limit: "1"
		});

		const response = await fetch(geocodeUrl);
		if (!response.ok) throw new Error("Unable to retrieve Pretoria map coordinates.");

		const results = await response.json();
		const latitude = Number(results[0]?.lat);
		const longitude = Number(results[0]?.lon);
		if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
			throw new Error("No map coordinates were returned for Pretoria.");
		}

		const map = leaflet.map(mapElement, { zoomControl: true });
		map.setView([latitude, longitude], 12);
		leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 19,
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>'
		}).addTo(map);

		mapElement.hidden = false;
		mapSection.dataset.mapReady = "true";
		status.textContent = "Interactive map of the general Pretoria area. This is not an exact salon location.";
		window.requestAnimationFrame(() => map.invalidateSize());
	} catch {
		status.textContent = "The interactive map could not be loaded. The general area map is shown below.";
	}
};

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initializePretoriaAreaMap, { once: true });
} else {
	initializePretoriaAreaMap();
}