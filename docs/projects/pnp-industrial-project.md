# Pick and Place Industrial Project

*Written on: 02.11.2025*

## Overview

My industrial project in collaboration with [nanoplus](https://nanoplus.com/) had my teammates and I working together on a pick-and-place project. The task at hand involved programming a pick-and-place/3-D printer machine for the identification and pick-up of specific items of millimeters in length, i.e. approx. 3 mm x 1.6 mm. The items in question were laser heat spreaders (LHS) that required precise handling so as not to damage their surface.  The task would come down to the following points:

- Design CAD holds for a newly-bought camera
- Fine-tune a YOLO model for identification of the LHS
- Write a python script to send g-code for the pick-and-place action

Our team of 5 distributed our work according to our capabilities. I personally took the responsibility of working on the YOLO-based computer vision model. However, during my free time, I would keep myself updated over the progress of my teammates.  In the sections that ensue, I will be covering the different aspects of the project that we tackled.

---

## CAD

The CAD aspect involved designing a holder for the camera to be have a clear view of the LHS while being moved alongside the pick-and-place machine. 

---

### Challenge

The final decision was to have the camera be held directly next to the pick-and-place vacuum pick-up component. 
The challenges faced here were:

- Challenge 1
- Challenge 2
- Challenge 3

**Note:** We originally also designed a vacuum pick-up nozzle according to the specifications of nanoplus, but due to constraints on the smallest possible 3-D print by the company's 3-D printer at the time, we had to make do with a rougher pick-up nozzle. The principle of pick-up was all that mattered. The tests would be run on defective LHS so as not to damage precious items.

---

### Solution

<!-- Import model-viewer FIRST -->
<script type="module" src="../../js/model-viewer.min.js"></script>

<!-- Style -->
<style>
  .model-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    justify-items: center;
    align-items: start;
  }

  .model-item {
    background-color: #1e1e1e;
    border-radius: 12px;
    padding: 16px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  }

  model-viewer {
    width: 100%;
    height: 400px;
    border-radius: 8px;
  }

  .caption {
    margin-top: 12px;
    font-size: 1rem;
    color: #ccc;
  }
</style>

<!-- Model Grid -->
<div class="model-grid">
  <div class="model-item">
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
    <div class="caption">Lighting Bracket</div>
  </div>

  <div class="model-item">
    <model-viewer
      src="../assets/cad/vertopal.com_lbracket_fnf.glb"
      camera-controls
      auto-rotate
      shadow-intensity="1.0"
      exposure="0.2"
      shadow-softness="0.8"
      environment-image="neutral"
      alt="Left bracket model">
    </model-viewer>
    <div class="caption">Left Bracket</div>
  </div>

  <div class="model-item">
    <model-viewer
      src="../assets/cad/vertopal.com_rbracket_fnf.glb"
      camera-controls
      auto-rotate
      shadow-intensity="1.0"
      exposure="0.2"
      shadow-softness="0.8"
      environment-image="neutral"
      alt="Right bracket model">
    </model-viewer>
    <div class="caption">Right Bracket</div>
  </div>

  <div class="model-item">
    <model-viewer
      src="../assets/cad/vertopal.com_Raspberry Pi 4 Model B.glb"
      camera-controls
      auto-rotate
      shadow-intensity="1.0"
      exposure="0.2"
      shadow-softness="0.8"
      environment-image="neutral"
      alt="Raspberry Pi 4 Model B">
    </model-viewer>
    <div class="caption">Raspberry Pi 4 Model B</div>
  </div>
</div>

---

## YOLO: Computer Vision

---

### What is YOLO?

---

### Using YOLO for Identifying Laser Heat Spreaders

---

### Results of YOLO for Detection

---

## Pick-and-Place Programming

---

### g-code Explained

---

### g-code Translator in Python

---