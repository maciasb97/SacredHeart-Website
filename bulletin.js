const API_KEY = "REMOVED";
const FOLDER_ID = "1S7tgG0VARIRd_lAcfg5s4E8KWrpcQ-uG";

// Exported so script.js can import and call it only on the bulletins page
export async function fetchBulletin() {

    // Build the Google Drive API request URL
    // - FOLDER_ID tells it which folder to look in
    // - API_KEY authenticates the request
    // - fields=files(id,name) tells Google to only return the file ID and name (keeps response lightweight)
    // - orderBy=name+desc sorts files by name in descending order (newest dates appear first)
    const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name)&orderBy=name+desc`;
    
    // Call the Google Drive API and wait for a response
    const response = await fetch(url);

    // Convert the raw response into a usable JavaScript object
    const data = await response.json();

    // Tracks the current year as we loop — used to know when to insert a year header
    // Starts as null so the first file always triggers a header
    let currentYear = null;

    // Loop through each file Google returned
    data.files.forEach(file => {

        // Create a new <a> link element in memory (not on the page yet)
        const link = document.createElement('a');

        // Set the link URL using the file's unique Google Drive ID
        // This opens the PDF in the current tab
        link.href = `https://drive.google.com/file/d/${file.id}/view`;
        
        // Search the filename for a date in either 20xx.xx.xx or 20xx-xx-xx format
        // The parentheses in the pattern capture the month and day as separate groups
        const dateMatch = file.name.match(/20\d\d[-.](\d{2})[-.](\d{2})/);

        // Default label is the raw filename in case no date is found
        let label = file.name;

        // Default year is null in case no date is found
        let fileYear = null;

        // Only runs if a date was found in the filename
        if (dateMatch) {
            // fullMatch = the full date string e.g. "2026.04.05"
            // month and day are the captured groups from the pattern
            const [fullMatch, month, day] = dateMatch;

            // Slice the first 4 characters of the full match to get the year
            const year = fullMatch.slice(0, 4);

            // Store the year for the header check below
            fileYear = year;

            // Create a real JavaScript Date object
            // month - 1 is needed because JS counts months from 0 (January = 0)
            const date = new Date(year, month - 1, day);

            // Convert the date to a readable format e.g. "April 5, 2026"
            label = date.toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
            });
        }

        // Check if the year has changed since the last file
        // fileYear && makes sure we don't add a header if no date was found
        if (fileYear && fileYear !== currentYear) {

            // Create a new <h2> element to use as the year header
            const header = document.createElement('h2');
            header.textContent = fileYear;

            // Add the year header to the bulletin-list div on the page
            document.getElementById('bulletin-list').appendChild(header);

            // Update currentYear so we don't repeat the header for the same year
            currentYear = fileYear;
        }
    
        // Set the visible link text to the formatted date (or raw filename if no date found)
        link.textContent = label;

        // Add the completed link to the bulletin-list div on the page
        document.getElementById('bulletin-list').appendChild(link);
    });
}