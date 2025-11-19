let saintsData = null;

/** Load the JSON file only once */
async function loadSaintsJSON() {
    if (saintsData) return saintsData; 

    // URL to your Relics-list.json in GitHub
    const url = "https://raw.githubusercontent.com/maciasb97/Sacred-Heart-Website-Data-Files/refs/heads/main/json-files/Relics-list.json";

    try {
        const response = await fetch(url);
        saintsData = await response.json();
        return saintsData;
    } catch (err) {
        console.error("Error loading Relics-list.json:", err);
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

