console.log("*API Storage*");

if (localStorage.key("theme") === null) {
  localStorage.setItem("theme", "light");
}

let theme = localStorage.getItem("theme");

const lightButton = document.querySelector("#light");
const darkButton = document.querySelector("#dark");
const h1 = document.querySelector("h1");

h1.textContent = `Theme: ${theme}`;
document.body.className = theme;

lightButton.addEventListener("click", () => {
  theme = "light";

  h1.textContent = `Theme: ${theme}`;
  document.body.className = "light";
  localStorage.setItem("theme", theme);
});
darkButton.addEventListener("click", () => {
  theme = "dark";

  h1.textContent = `Theme: ${theme}`;
  document.body.className = "dark";
  localStorage.setItem("theme", theme);
});
