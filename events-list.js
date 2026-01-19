export function flyerReader() {
  const EVENTS_JSON_URL = "https://raw.githubusercontent.com/maciasb97/Sacred-Heart-Website-Data-Files/refs/heads/main/json-files/events.json";

  const loadingEl = document.getElementById("events-loading");
  const noEventsEl = document.getElementById("no-events");
  const eventsListEl = document.getElementById("events-list");

  // Safety check: only run if required elements exist
  if (!eventsListEl) return;

  fetch(EVENTS_JSON_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load events");
      }
      return response.json();
    })
    .then(data => {
      if (loadingEl) loadingEl.style.display = "none";

      if (!data.events || data.events.length === 0) {
        if (noEventsEl) noEventsEl.hidden = false;
        return;
      }

      // Sort by date (newest first)
      data.events.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      data.events.forEach(event => {
        const iframe = document.createElement("iframe");
        iframe.src = event.url;
        iframe.loading = "lazy";
        iframe.width = "100%";
        iframe.height = "600";
        iframe.style.border = "none";

        eventsListEl.appendChild(iframe);
      });
    })
    .catch(error => {
      console.error(error);
      if (loadingEl) {
        loadingEl.textContent = "Unable to load events at this time.";
      }
    });
}