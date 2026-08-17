document.addEventListener("DOMContentLoaded", function () {

  const currentYear = new Date().getFullYear();

  /* =========================================
     FOOTER CSS
  ========================================= */

  const footerCSS = `
    <style id="injected-footer-styles">

      .site-footer {
        width: 100%;
        max-width: none;
        margin: 40px 0 0;
        padding: 32px 22px;
        text-align: center;
        font-family: 'DM Sans', Arial, sans-serif;
        color: #686d65;
        background: #f7f5f0;
        border-top: 1px solid #e2e5de;
        box-sizing: border-box;
        display: block;
      }

      .site-footer,
      .site-footer * {
        box-sizing: border-box;
      }

      /* Footer Links */

      .site-footer .footer-links {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px 22px;
        margin: 0 auto 16px;
      }

      .site-footer .footer-links a {
        color: #686d65;
        text-decoration: none;
        font-size: 12px;
        font-weight: 500;
        line-height: 1.5;
        transition: color 0.2s ease;
      }

      .site-footer .footer-links a:hover {
        color: #5b704f;
      }

      /* Copyright */

      .site-footer > p:not(.disclaimer) {
        width: 100%;
        margin: 0 auto 10px;
        font-size: 11.5px;
        line-height: 1.5;
        color: #686d65;
      }

      /* Disclaimer */

      .site-footer .disclaimer {
        width: 100%;
        max-width: 650px;
        margin: 10px auto 0;
        padding: 0;
        font-size: 10px;
        font-weight: 400;
        color: #858981;
        line-height: 1.6;
        text-align: center;
      }

      .site-footer .disclaimer a {
        color: inherit;
        text-decoration: underline;
      }

      /* Mobile */

      @media (max-width: 650px) {

        .site-footer {
          margin-top: 30px;
          padding: 28px 15px;
        }

        .site-footer .footer-links {
          gap: 11px 16px;
          margin-bottom: 15px;
        }

        .site-footer .footer-links a {
          font-size: 11.5px;
        }

        .site-footer > p:not(.disclaimer) {
          font-size: 11px;
        }

        .site-footer .disclaimer {
          max-width: 100%;
          font-size: 9.5px;
          line-height: 1.6;
        }

      }

    </style>
  `;


  /* =========================================
     INJECT FOOTER CSS ONCE
  ========================================= */

  if (!document.getElementById("injected-footer-styles")) {
    document.head.insertAdjacentHTML("beforeend", footerCSS);
  }


  /* =========================================
     FOOTER HTML
  ========================================= */

  const footerHTML = `
    <footer class="site-footer">

      <div class="footer-links">

        <a href="index.html">
          Home
        </a>

        <a href="offer.html">
          Member Vault
        </a>

        <a href="privacy.html">
          Privacy Policy
        </a>

        <a href="terms.html">
          Terms of Service
        </a>

        <a href="disclaimer.html">
          Disclaimer
        </a>

      </div>


      <p>
        &copy; ${currentYear} Lumina Haven. All rights reserved.
      </p>


      <p class="disclaimer">
        Lumina Haven is a curated digital lifestyle and editorial publication
        dedicated to slow living and intentional design.
        For full details regarding partner links and third-party offers,
        please visit our
        <a href="disclaimer.html">
          Disclaimer
        </a>
        page.
      </p>

    </footer>
  `;


  /* =========================================
     INSERT FOOTER AT END OF BODY
  ========================================= */

  document.body.insertAdjacentHTML("beforeend", footerHTML);

});