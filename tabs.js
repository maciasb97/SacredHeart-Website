export function initTabs() {
  const tabButtons = document.querySelectorAll(".tablinks");
  const tabContents = document.querySelectorAll(".tabcontent");

  if (tabButtons.length === 0) return; // No tabs on page

  function openCity(cityName, clickedButton) {
    // Hide all tab contents
    tabContents.forEach(tab => (tab.style.display = "none"));

    // Remove active state from all buttons
    tabButtons.forEach(btn => btn.classList.remove("active"));

    // Show the chosen tab
    const activeTab = document.getElementById(cityName);
    //determines the base css "display" of items in that specific container actively displayed at the moment
    if (activeTab) activeTab.style.display = "block";

    // Highlight the clicked button
    clickedButton.classList.add("active");
  }

  // Add click listeners
  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const cityName = button.dataset.city;
      openCity(cityName, button);
    });
  });

  // Open the default tab automatically
  const defaultBtn = document.getElementById("defaultOpen");
  if (defaultBtn) {
    defaultBtn.click();
  }
}
