document.addEventListener("DOMContentLoaded", function () {
  let vantaEffect;

  function initVanta() {
    // Clean up any existing effect
    if (vantaEffect) {
      vantaEffect.destroy();
      vantaEffect = null;
    }

    const el = document.querySelector("#vanta-background");
    if (!el) return; // Skip if element not on this page

    const pageTitle = document.title;
    const isDark = document.documentElement.getAttribute("data-md-color-scheme") === "slate";

    // About page
    if (pageTitle === "About - Cedric's Website") {
      vantaEffect = VANTA.NET({
        el,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        color: isDark ? 0xff3366 : 0x0b0b25,
        backgroundColor: isDark ? 0x0b0b25 : 0xf5f7fa,
        points: 10.0,
        maxDistance: 20.0,
        spacing: 15.0
      });
    }

    // Home page
    if (pageTitle === "Cedric's Website") {
      vantaEffect = VANTA.WAVES({
        el,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: isDark ? 0x4f9dff : 0x0044aa,
        shininess: 50.0,
        waveHeight: 20.0,
        waveSpeed: 0.7,
        zoom: 1.0,
        backgroundColor: isDark ? 0x0b0b25 : 0xf5f7fa
      });
    }
  }

  // Run on initial page load
  initVanta();

  // Run again whenever MkDocs Material navigates (AJAX page change)
  document.addEventListener("nav", initVanta);
});
