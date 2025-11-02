// dinoscript.js
// Chrome Dino Game - MkDocs Compatible Version
// ------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Wait a moment to ensure MkDocs content is fully rendered
  setTimeout(initDinoGame, 300);

  function initDinoGame() {
    const canvas = document.getElementById("game");
    if (!canvas) {
      console.error("Canvas element with id='game' not found!");
      return;
    }

    const ctx = canvas.getContext("2d");

    // --- Game Variables ---
    let scoreInterval = 0;
    let frameInterval = 0;
    let groundscroll = 0;
    let groundscroll2 = 0;
    let tempstart = 0;
    let groundbool = false;
    let frame = 0;
    let bool = false;
    let grav = 0.6;
    let gamespeed = 0;
    let onG = false;

    // Small obstacle
    let multiS = -1;
    let picS = 0;
    let obsS = {
      x: 20,
      y: 230,
      w: 34,
      h: 70,
      scroll: -100,
      on: false,
    };

    // Big obstacle
    let multiB = -1;
    let picB = 0;
    let obsB = {
      x: 20,
      y: 201,
      w: 49,
      h: 100,
      scroll: -200,
      on: false,
    };

    // Player
    let p = {
      x: 100,
      y: 500,
      w: 89,
      h: 94,
      yv: 0,
      score: 0,
      hscore: 0,
      jump: 15,
    };

    const plat = {
      x: 0,
      y: canvas.height - 100,
      w: canvas.width,
      h: 5,
    };

    // --- Load Sprite ---
    const sprImg = new Image();
    sprImg.src = "../assets/sprite.png";
    sprImg.onerror = () =>
      console.error("Failed to load sprite image:", sprImg.src);

    sprImg.onload = function () {
      console.log("Sprite loaded, starting Dino game...");
      setInterval(update, 1000 / 60);
    };

    // --- Update Loop ---
    function update() {
      // Gravity & jump
      if (!onG) p.yv += grav;
      p.y += p.yv;

      // Scoring
      scoreInterval++;
      if (scoreInterval > 6 && gamespeed !== 0) {
        p.score++;
        scoreInterval = 0;
      }

      if (gamespeed < 17 && gamespeed !== 0) {
        gamespeed = 7 + p.score / 100;
      }

      // Ground collision
      onG = false;
      if (p.y + p.h > plat.y) {
        p.y = plat.y - p.h;
        onG = true;
      }

      // Collision detection
      if (
        p.x > canvas.width - obsB.scroll - p.w &&
        p.x < canvas.width - obsB.scroll + obsB.w * multiB &&
        p.y + p.h > obsB.y
      ) {
        gameover();
      }

      if (
        p.x > canvas.width - obsS.scroll - p.w &&
        p.x < canvas.width - obsS.scroll + obsS.w * multiS &&
        p.y + p.h > obsS.y
      ) {
        gameover();
      }

      // Animation frame
      frameInterval++;
      if (frameInterval > 5) {
        bool = !bool;
        frameInterval = 0;
      }

      frame = onG ? (bool ? 1514 : 1602) : 1338;

      // --- Draw ---
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Ground scrolling
      groundscroll += gamespeed;
      ctx.drawImage(
        sprImg,
        0,
        104,
        2404,
        18,
        0 - groundscroll + tempstart,
        plat.y - 24,
        2404,
        18
      );

      if (groundscroll - tempstart > 2404 - canvas.width || groundbool) {
        groundbool = true;
        groundscroll2 += gamespeed;
        ctx.drawImage(
          sprImg,
          0,
          104,
          canvas.width,
          18,
          0 - groundscroll2 + canvas.width,
          plat.y - 24,
          canvas.width,
          18
        );
        if (groundscroll2 > canvas.width && groundscroll - tempstart > 1000) {
          tempstart = canvas.width;
          groundscroll = 20;
        }
        if (groundscroll2 > 2402) {
          groundscroll2 = 0;
          groundbool = false;
        }
      }

      // Character
      if (gamespeed !== 0) {
        ctx.drawImage(sprImg, frame, 0, 88, 94, p.x, p.y, p.w, p.h);
      } else {
        ctx.drawImage(sprImg, 1338, 0, 88, 94, p.x, p.y, p.w, p.h);
      }

      // Small obstacle
      if (!obsB.on) {
        obsS.on = true;
        if (multiS === -1) rngS();
        ctx.drawImage(
          sprImg,
          picS,
          2,
          obsS.w * multiS,
          obsS.h,
          canvas.width - obsS.scroll,
          obsS.y,
          obsS.w * multiS,
          obsS.h
        );
        obsS.scroll += gamespeed;
        if (obsS.scroll > canvas.width + obsS.w * 3) {
          obsS.scroll = -100;
          multiS = -1;
          obsS.on = false;
        }
      }

      // Big obstacle
      if (!obsS.on) {
        obsB.on = true;
        if (multiB === -1) rngB();
        ctx.drawImage(
          sprImg,
          652,
          2,
          obsB.w * multiB,
          obsB.h,
          canvas.width - obsB.scroll,
          obsB.y,
          obsB.w * multiB,
          obsB.h
        );
        obsB.scroll += gamespeed;
        if (obsB.scroll > canvas.width + obsB.w * 3) {
          obsB.scroll = -200;
          multiB = -1;
          obsB.on = false;
        }
      }

      // Score display
      ctx.font = "20px Verdana";
      ctx.fillStyle = "black";
      ctx.fillText(`Score: ${p.score}`, 100, canvas.height - 40);
      ctx.fillText(`Highscore: ${p.hscore}`, 600, canvas.height - 40);
    }

    // --- Game Over ---
    function gameover() {
      gamespeed = 0;
      if (p.score > p.hscore) p.hscore = p.score;
      p.score = 0;
      obsB.scroll = -200;
      obsS.scroll = -100;
      scoreInterval = 0;
      frameInterval = 0;
      groundscroll = 0;
      groundscroll2 = 0;
      tempstart = 0;
      groundbool = false;
      multiS = -1;
      multiB = -1;
    }

    // --- Key Handling ---
    document.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 38) {
        if (onG) p.yv = -p.jump;
        if (gamespeed === 0) gamespeed = 7;
      }
    });

    // --- Random Obstacle Generators ---
    function rngS() {
      multiS = Math.floor(Math.random() * 3) + 1;
      picS = 446 + Math.floor(Math.random() * 2) * 102;
    }

    function rngB() {
      multiB = Math.floor(Math.random() * 3) + 1;
      picB = 652 + Math.floor(Math.random() * 2) * 150;
    }
  }
});
