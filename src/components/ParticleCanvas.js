import React, { useRef, useEffect, useContext } from "react";
import portfolioContext from "../context/Context";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const { theme } = useContext(portfolioContext);
  const isDarkMode = theme === "dark";
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Slight transparency to show glow
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = 500;

    function getColors() {
      return {
        particleColor: isDarkMode ? "#ffffff" : "#000000",
        bgColor: isDarkMode ? "#0a0a0a" : "#f0f0f0",
      };
    }

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.shadowBlur = this.glow; // Apply glow effect
        ctx.shadowColor =
          this.glowColor ||
          (isDarkMode ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)");

        ctx.fillStyle =
          this.color ||
          (isDarkMode ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)");
        ctx.fill();

        ctx.shadowBlur = 0; // Reset for next frame
      }

      update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0)
          this.dx *= -1;
        if (this.y + this.size > canvas.height || this.y - this.size < 0)
          this.dy *= -1;
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        let size = Math.random() * 3 + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let dx = (Math.random() - 0.5) * 2;
        let dy = (Math.random() - 0.5) * 2;
        particles.push(new Particle(x, y, dx, dy, size));
      }
    }

    function animate() {
      ctx.fillStyle = getColors().bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => particle.update());
      requestAnimationFrame(animate);
    }

    // Handle window resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const radius = 100; // Cursor interaction radius

      particles.forEach((particle) => {
        let dx = mouseX - particle.x;
        let dy = mouseY - particle.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
          // Apply effect to all particles in radius
          let intensity = 1 - distance / radius; // Closer particles get stronger effect
          let hue = Math.floor(intensity * 360); // Dynamic color shift

          particle.glow = intensity * 30; // Stronger glow near cursor

          if (isDarkMode) {
            particle.glowColor = `hsl(${hue}, 100%, 70%)`; // Brighter glow in dark mode
            particle.color = `hsl(${hue}, 100%, 50%)`; // More vibrant color
          } else {
            particle.glowColor = `hsl(${hue}, 100%, 40%)`; // Softer glow in light mode
            particle.color = `hsl(${hue}, 100%, 30%)`; // Muted color for light mode
          }
        } else {
          // Gradual fade back to normal state
          particle.glow = Math.max(particle.glow - 1, 0);
          particle.color = isDarkMode
            ? "rgba(255, 255, 255, 1)"
            : "rgba(0, 0, 0, 1)";
        }
      });
    });

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isDarkMode]); // Re-run animation when theme changes

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
    />
  );
};

export default ParticleCanvas;
