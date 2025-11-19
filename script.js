import { Header } from "./header.js";
import { Footer } from "./footer.js";
//import { galleryLoader } from "./gallery.js";
import { initTabs } from "./tabs.js";
import { initSections } from "./sections.js";
import { accordionTabs } from "./accord.js";
import { bulletinReader } from "./bulletin-reader.js";
import { renderSaintGroup } from "./saints-loader.js";



document.addEventListener("DOMContentLoaded", async function() {
  
  Header();
  Footer();
  /*galleryLoader();*/


  // --- Make the menu toggle work after header loads ---
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  
  initTabs();
  initSections();
  accordionTabs();
  
  //Runs bulletin-reader if page has "schedule" element
  if(document.getElementById("schedule")){
    bulletinReader();
  }

  //Runs the saints-loader if this page has "group-christ" saint section element
  if(document.getElementById("group-christ")){
    renderSaintGroup("group-christ", "Christ");
    renderSaintGroup("group-mary", "Mary");

    renderSaintGroup("group-A-C", "A-C");
    renderSaintGroup("group-D-G", "D-G");
    renderSaintGroup("group-H-L", "H-L");
    renderSaintGroup("group-M-P", "M-P");
    renderSaintGroup("group-Q-Z", "Q-Z");
  }

  
});





/*
document.addEventListener("DOMContentLoaded", function() {
  
  Header();
  Footer();



  
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  initTabs();
  initSections();

  
});*/