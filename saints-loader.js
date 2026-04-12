let saintsData = null;

/** Load the JSON file only once */
async function loadSaintsJSON() {
    if (saintsData) return saintsData; 

    try {
        const response = await fetch('/data/relic-list.json');
        saintsData = await response.json();
        return saintsData;
    } catch (err) {
        console.error("Error loading relic-list.json:", err);
    }
}

/** Render a specific group into a specific container */
export async function renderSaintGroup(containerId, groupName) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Missing div: #${containerId}`);
        return;
    }

    const data = await loadSaintsJSON();
    if (!data) {
        container.innerHTML = `<p>Content currently unavailable, please check back later.</p>`;
        return;
    }
    if (!data[groupName]) {
        container.innerHTML = `<p>No data found for group "${groupName}".</p>`;
        return;
    }

    // Clear old content
    container.innerHTML = "";

    data[groupName].forEach(name => {
        const p = document.createElement("p");
        p.textContent = name;
        container.appendChild(p);
    });
}

