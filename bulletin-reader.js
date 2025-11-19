export function bulletinReader(){
    const jsonURL = "https://raw.githubusercontent.com/maciasb97/Sacred-Heart-Website-Data-Files/refs/heads/main/json-files/bulletin.json";

    fetch(jsonURL)
    .then(response => response.json())
    .then(data => {
        // Assuming the newest bulletin is THE LAST item in the JSON list
        console.log("Loaded JSON:", data);
        
        const latest = data[data.length - 1];

        const btn = document.getElementById("bulletin-btn");

        // Update button link
        btn.href = latest.url;

        // OPTIONAL: Update button text to include the date/title
        // btn.textContent = `Weekly Bulletin (${latest.title})`;
    })
    .catch(err => console.error("Error loading bulletin JSON:", err));

}


