document.addEventListener("DOMContentLoaded", function() {
  const pageTitle = document.title;
  const isDark = document.documentElement.getAttribute("data-md-color-scheme") === "slate";

  // Check if title contains "About"
  if (pageTitle === "About - Cedric's Website") {
    vantaEffect = VANTA.NET({
      el: "#vanta-background",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      color: isDark ? 0xff3366 : 0x0b0b25,
      backgroundColor: isDark ? 0x0b0b25 : 0xf5f7fa,
      points: 10.00,
      maxDistance: 20.00,
      spacing: 15.00
    });
  }

  if (pageTitle === "Cedric's Website") {
      vantaEffect = VANTA.WAVES({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: isDark ? 0x4f9dff : 0x0044aa,
        shininess: 50.00,
        waveHeight: 20.00,
        waveSpeed: 0.70,
        zoom: 1.0,
        backgroundColor: isDark ? 0x0b0b25 : 0xf5f7fa
      });
    }
});



