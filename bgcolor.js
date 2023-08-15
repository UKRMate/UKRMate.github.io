document.addEventListener("DOMContentLoaded", function () {
  const darkColors = ["#001f3f", "#003366", "#004080", "#006400", "#8B0000", "#800080"];
  const randomDarkColor = darkColors[Math.floor(Math.random() * darkColors.length)];
  
  document.body.style.backgroundColor = randomDarkColor;
  document.body.style.borderColor = lightenColor(randomDarkColor, 30); // Застосування яскравішого кольору
  
  const header = document.querySelector(".header");
  header.style.backgroundColor = randomDarkColor;
  header.style.borderColor = lightenColor(randomDarkColor, 30); // Застосування яскравішого кольору
});

function lightenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return `#${(0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1)}`;
}
