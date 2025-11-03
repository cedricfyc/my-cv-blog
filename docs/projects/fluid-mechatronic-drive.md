# Fluid Mechatronic Linear Drive Simulation in Boris

I experimented with the integrated model viewer by Google. The source code is provided by them as a .js file, and it is being rendered from the script within this page. I will use it when adding projects in the future.

<!-- Import model-viewer FIRST -->
<script type="module" src="../../js/model-viewer.min.js"></script>

<!-- Style -->
<style>
  model-viewer {
    background-color: #1e1e1e;
    display: inline-block; /* inline-block + text-align center ensures centering */
    width: 60%; /* large but not full-width */
    height: 500px;
    border-radius: 12px;
  }
</style>

<!-- Model Viewer -->
<model-viewer
  src="../assets/cad/vertopal.com_lightingbracket_fnf.glb"
  camera-controls
  auto-rotate
  shadow-intensity="1.0"
  exposure="0.2"
  shadow-softness="0.8"
  environment-image="neutral"
  alt="Lighting bracket model">
</model-viewer>

---