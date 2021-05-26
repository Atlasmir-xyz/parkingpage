window.onload = () => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (prefersDarkScheme.matches) {
    document.getElementById("themeToggle").innerHTML = "&#9728;&#65039;"; // ☀️
  }
};

async function toggleTheme() {
  const h1 = document.getElementsByTagName("h1");
  const p = document.getElementsByTagName("p");
  const msForm = document.getElementById("msForm");
  const themeToggle = document.getElementById("themeToggle");
  const footerText = document.getElementsByClassName("footerText");
  let currentMode = document.getElementById("themeToggle").innerHTML;
  if (currentMode === "☀️") {
    // change to Light Mode
    document.getElementById("themeToggle").innerHTML = "&#127761;"; // 🌑
    document.body.style.backgroundColor = "white";
    themeToggle.style.background = "white";
    for (let i = 0; i < h1.length; ++i) {
      h1[i].style.color = "black";
    }
    for (let i = 0; i < p.length; ++i) {
      p[i].style.color = "black";
    }
    for (let i = 0; i < footerText.length; ++i) {
      footerText[i].style.color = "black";
    }
    msForm.style.color = "black";
  } else {
    // 🌑 change to Dark Mode
    document.getElementById("themeToggle").innerHTML = "&#9728;&#65039;"; // ☀️
    document.body.style.backgroundColor = "#1c1c1e";
    themeToggle.style.background = "#1c1c1e";
    for (let i = 0; i < h1.length; ++i) {
      h1[i].style.color = "white";
    }
    for (let i = 0; i < p.length; ++i) {
      p[i].style.color = "white";
    }
    for (let i = 0; i < footerText.length; ++i) {
      footerText[i].style.color = "white";
    }
    msForm.style.color = "white";
  }
}
