export function initSections() {
  const secButtons = document.querySelectorAll(".seclinks");
  const secContents = document.querySelectorAll(".seccontent");

  if (secButtons.length === 0) return; // No tabs on page

  function openCity(secName, clickedButton) {
    // Hide all tab contents
    secContents.forEach(tab => (tab.style.display = "none"));

    // Remove active state from all buttons
    secButtons.forEach(btn => btn.classList.remove("active"));

    // Show the chosen tab
    const activeTab = document.getElementById(secName);
    //determines the base css "display" of items in that specific container actively displayed at the moment
    if (activeTab) activeTab.style.display = "block";

    // Highlight the clicked button
    clickedButton.classList.add("active");
  }

  // Add click listeners
  secButtons.forEach(button => {
    button.addEventListener("click", () => {
      const secName = button.dataset.city;
      openCity(secName, button);
    });
  });

  // Open the default tab automatically
  const defaultBtn = document.getElementById("defaultOpen2");
  if (defaultBtn) {
    defaultBtn.click();
  }
}