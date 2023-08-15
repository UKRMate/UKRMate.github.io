document.addEventListener("DOMContentLoaded", function () {
  const darkColors = ["#001f3f", "#003366", "#004080", "#006400", "#8B0000", "#800080"];
  const randomDarkColor = darkColors[Math.floor(Math.random() * darkColors.length)];

  document.body.style.backgroundColor = randomDarkColor;

  const brighterColor = getBrighterColor(randomDarkColor, 30); // Отримати яскравіший колір
  document.body.style.borderColor = brighterColor;

  const header = document.querySelector(".header");
  header.style.backgroundColor = randomDarkColor;
  header.style.borderColor = brighterColor;
});

function getBrighterColor(color, percent) {
  const hex = parseInt(color.slice(1), 16);
  const r = (hex >> 16) & 255;
  const g = (hex >> 8) & 255;
  const b = hex & 255;
  const amt = percent / 100;

  const newR = Math.min(255, Math.round(r + 255 * amt));
  const newG = Math.min(255, Math.round(g + 255 * amt));
  const newB = Math.min(255, Math.round(b + 255 * amt));

  return `rgb(${newR}, ${newG}, ${newB})`;
}
