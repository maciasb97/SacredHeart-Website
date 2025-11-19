export function Footer(){
    const footerHTML = `<footer class="footer">
    <div class="social-icons">
    <a href="https://www.facebook.com/p/Sacred-Heart-Byzantine-Catholic-Church-in-Livonia-MI-100064814883695/" target="_blank">
        <i class="bx bxl-facebook"></i>
    </a>
    <a href="https://www.youtube.com/@EparchyofParma" target="_blank">
        <i class="bx bxl-youtube"></i>
    </a>
    </div>
    <div class="footer-img">
    <img src="images/main_logos/head.png" alt="">
    </div>
    <div class="bottom-text">
        <p>© 2025 Sacred Heart Byzantine Catholic Church | All Rights Reserved.</p>
        <p>Designed & Developed by <a href="http://www.linkedin.com/in/brandonmacias1" target="_blank">Brandon Macias</a></p>
    </div>
    
</footer>`;

    document.getElementById("footer").innerHTML = footerHTML;
}