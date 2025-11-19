export function Header(){
    const headerHTML = 
    `<header class="header">
      <a href="index.html#home" class="logo">
        <img src="images/main_logos/header.png" alt="">
      </a>
      <i class = "bx bx-menu" id="menu-icon"></i>

      <!--Navagation Bar-->
      <nav class= "navbar">
        <a href = "index.html#home">HOME</a>
        <a href = "about.html">ABOUT</a>
        <a href = "index.html#schedule">SCHEDULE</a>
        <a href = "shrine.html">ALL SAINTS SHRINE</a>
        <a href = "hall.html">BANQUET HALL</a>
        <a href = "index.html#contact">CONTACT & LOCATION</a>
        <a href="https://secure.anedot.com/sacred-heart-byzantine-catholic-church/shbcc" target="_blank">
          <button class="main-btn">DONATE</button>
        </a>
      </nav>
    </header>`;

    document.getElementById("header").innerHTML = headerHTML;
    
}

