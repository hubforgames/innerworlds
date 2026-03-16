(function () {
  const canvas = document.getElementById("stars");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  const stars = [];
  const COUNT = 120;

  for (let i = 0; i < COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: 0.2 + Math.random() * 0.4
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      ctx.fillRect(s.x, s.y, s.size, s.size);
      s.y += s.speed;

      if (s.y > canvas.height) {
        s.y = 0;
        s.x = Math.random() * canvas.width;
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
})();