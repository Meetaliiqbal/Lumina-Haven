document.addEventListener("DOMContentLoaded", function () {

  const headerHTML = `
    <header class="site-header">

      <div class="header-inner">

        <a href="index.html" class="brand-logo">
          Lumina <span>Haven</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="header-nav desktop-nav">
          <a href="mindset.html">Mindset</a>
          <a href="decor.html">Home Decor</a>
          <a href="fashion.html">Fashion</a>
          <a href="travel.html">Travel</a>
          <a href="culinary.html">Food</a>
          <a href="nature.html">Nature</a>
          <a href="offer.html" class="highlight-btn">
            Member Vault
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="mobile-menu-btn"
          type="button"
          aria-label="Open navigation"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      <!-- Mobile Side Drawer -->
      <nav class="mobile-nav">

        <div class="mobile-nav-title">
          Explore
        </div>

        <a href="mindset.html">Mindset</a>
        <a href="decor.html">Home Decor</a>
        <a href="fashion.html">Fashion</a>
        <a href="travel.html">Travel</a>
        <a href="culinary.html">Food</a>
        <a href="nature.html">Nature</a>

        <a href="offer.html" class="mobile-vault-btn">
          Member Vault
        </a>

      </nav>

    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);


  /* =========================
     HEADER CSS
  ========================= */

  const headerCSS = document.createElement("style");

  headerCSS.textContent = `

    /* =========================
       HEADER
    ========================= */

    .site-header{
      position:sticky;
      top:0;
      z-index:9999;
      width:100%;
      background:rgba(251,250,248,.96);
      backdrop-filter:blur(14px);
      -webkit-backdrop-filter:blur(14px);
      border-bottom:1px solid #e5e0d8;
    }

    .header-inner{
      width:100%;
      max-width:1180px;
      height:72px;
      margin:0 auto;
      padding:0 24px;

      display:flex;
      align-items:center;
      justify-content:space-between;
    }


    /* =========================
       LOGO
    ========================= */

    .brand-logo{
      font-family:'Cormorant Garamond',Georgia,serif;
      font-size:27px;
      font-weight:700;
      letter-spacing:.4px;
      color:#24211d;
      white-space:nowrap;
      text-decoration:none;
    }

    .brand-logo span{
      color:#765638;
      font-style:italic;
    }


    /* =========================
       DESKTOP NAV
    ========================= */

    .header-nav{
      display:flex;
      align-items:center;
      gap:21px;

      font-family:'Inter',Arial,sans-serif;
      font-size:12.5px;
      font-weight:500;
    }

    .header-nav a{
      color:#68635b;
      text-decoration:none;
      white-space:nowrap;
      transition:color .2s ease;
    }

    .header-nav a:hover{
      color:#765638;
    }

    .header-nav .highlight-btn{
      background:#24211d;
      color:#fff;
      padding:9px 16px;
      border-radius:6px;
    }

    .header-nav .highlight-btn:hover{
      background:#765638;
      color:#fff;
    }


    /* =========================
       MOBILE BUTTON
    ========================= */

    .mobile-menu-btn{
      display:none;

      width:42px;
      height:42px;

      padding:0;

      border:1px solid #e1dcd4;
      border-radius:7px;

      background:#fff;

      cursor:pointer;

      align-items:center;
      justify-content:center;
      flex-direction:column;
      gap:5px;

      position:relative;
      z-index:10002;
    }

    .mobile-menu-btn span{
      display:block;
      width:18px;
      height:1.5px;

      background:#24211d;

      transition:
        transform .25s ease,
        opacity .2s ease;
    }


    /* =========================
       MOBILE DRAWER
    ========================= */

    .mobile-nav{

      display:block;

      position:fixed;

      top:0;
      right:0;

      width:50vw;
      max-width:330px;
      min-width:250px;

      height:100vh;
      height:100dvh;

      padding:88px 25px 30px;

      background:#fbfaf8;

      border-left:1px solid #e5e0d8;

      box-shadow:-12px 0 35px rgba(0,0,0,.08);

      overflow-y:auto;

      transform:translateX(100%);

      transition:
        transform .28s cubic-bezier(.4,0,.2,1);

      z-index:10000;
    }


    /* Drawer visible */

    .site-header.menu-open .mobile-nav{
      transform:translateX(0);
    }


    /* =========================
       DRAWER TITLE
    ========================= */

    .mobile-nav-title{
      margin-bottom:18px;

      color:#765638;

      font-family:'Cormorant Garamond',Georgia,serif;
      font-size:23px;
      font-weight:600;

      border-bottom:1px solid #e5e0d8;
      padding-bottom:13px;
    }


    /* =========================
       DRAWER LINKS
    ========================= */

    .mobile-nav a{
      display:block;

      padding:13px 0;

      border-bottom:1px solid #eeeae4;

      color:#68635b;

      font-family:'Inter',Arial,sans-serif;
      font-size:13px;
      font-weight:500;

      text-decoration:none;

      transition:
        color .2s ease,
        padding-left .2s ease;
    }

    .mobile-nav a:hover{
      color:#765638;
      padding-left:4px;
    }


    /* =========================
       MEMBER VAULT
    ========================= */

    .mobile-nav .mobile-vault-btn{

      margin-top:22px;

      padding:12px 15px;

      border:0;
      border-radius:6px;

      background:#24211d;
      color:#fff;

      text-align:center;
    }

    .mobile-nav .mobile-vault-btn:hover{
      background:#765638;
      color:#fff;
      padding-left:15px;
    }


    /* =========================
       OPEN BUTTON → X
    ========================= */

    .site-header.menu-open .mobile-menu-btn span:nth-child(1){
      transform:translateY(6.5px) rotate(45deg);
    }

    .site-header.menu-open .mobile-menu-btn span:nth-child(2){
      opacity:0;
    }

    .site-header.menu-open .mobile-menu-btn span:nth-child(3){
      transform:translateY(-6.5px) rotate(-45deg);
    }


    /* =========================
       MOBILE
    ========================= */

    @media(max-width:760px){

      .header-inner{
        height:66px;
        padding:0 16px;
      }

      .brand-logo{
        font-size:24px;
      }

      .desktop-nav{
        display:none;
      }

      .mobile-menu-btn{
        display:flex;
      }

    }


    /* =========================
       DESKTOP
    ========================= */

    @media(min-width:761px){

      .mobile-nav{
        display:none;
      }

    }


    /* =========================
       SMALL PHONES
    ========================= */

    @media(max-width:380px){

      .header-inner{
        padding:0 13px;
      }

      .brand-logo{
        font-size:22px;
      }

      .mobile-menu-btn{
        width:39px;
        height:39px;
      }

      .mobile-nav{
        width:72vw;
        min-width:0;
      }

    }

  `;

  document.head.appendChild(headerCSS);


  /* =========================
     MENU TOGGLE
  ========================= */

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".mobile-menu-btn");

  menuButton.addEventListener("click", function (event) {

    event.stopPropagation();

    const isOpen = header.classList.toggle("menu-open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

  });


  /* =========================
     OUTSIDE CLICK → CLOSE
  ========================= */

  document.addEventListener("click", function (event) {

    if (!header.classList.contains("menu-open")) {
      return;
    }

    const clickedInsideDrawer =
      event.target.closest(".mobile-nav");

    const clickedMenuButton =
      event.target.closest(".mobile-menu-btn");

    if (!clickedInsideDrawer && !clickedMenuButton) {

      header.classList.remove("menu-open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.setAttribute(
        "aria-label",
        "Open navigation"
      );

    }

  });


  /* =========================
     LINK CLICK → CLOSE
  ========================= */

  document.querySelectorAll(".mobile-nav a").forEach(function(link){

    link.addEventListener("click", function(){

      header.classList.remove("menu-open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.setAttribute(
        "aria-label",
        "Open navigation"
      );

    });

  });


  /* =========================
     ESC KEY → CLOSE
  ========================= */

  document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

      header.classList.remove("menu-open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.setAttribute(
        "aria-label",
        "Open navigation"
      );

    }

  });

});
// =========================
// LUMINA HAVEN FAVICON
// =========================

if (!document.querySelector('link[data-lumina-favicon]')) {

  const favicon = document.createElement('link');

  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.setAttribute('data-lumina-favicon', 'true');

  favicon.href = 'data:image/svg+xml,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">

      <rect
        width="64"
        height="64"
        rx="15"
        fill="#20231f"
      />

      <text
        x="32"
        y="43"
        text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="34"
        font-weight="400"
        fill="#ffffff"
        letter-spacing="1"
      >LH</text>

    </svg>
  `);

  document.head.appendChild(favicon);
}