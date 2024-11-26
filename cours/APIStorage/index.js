console.log("*API Storage*");

let theme = "light" // "dark";

const lightButton = document.querySelector("#light");
const darkButton = document.querySelector("#dark");
const h1 = document.querySelector("h1");

h1.textContent = `Theme: ${theme}`;

lightButton.addEventListener("click", () => {
  theme = "light";
  h1.textContent = `Theme: ${theme}`;
  document.body.className = "light";
})
darkButton.addEventListener("click", () => {
  theme = "dark";
  h1.textContent = `Theme: ${theme}`;
  document.body.className = "dark";
})

// API Storage

localStorage
sessionStorage

