export function flyerReader(){
    const jsonURL = "https://raw.githubusercontent.com/maciasb97/Sacred-Heart-Website-Data-Files/refs/heads/main/json-files/flyer.json";

    fetch(jsonURL)
    .then(response => response.json())
    .then(data => {
        // Assuming the newest flyer is THE LAST item in the JSON list
        console.log("Loaded JSON:", data);
        
        const latest = data[data.length - 1];

        const btn = document.getElementById("schedule-btn");

        // Update button link
        btn.href = latest.url;

    })
    .catch(err => console.error("Error loading bulletin JSON:", err));

}


