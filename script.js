const ul = document.getElementById("ul");
const btn = document.getElementById("btn");
const primaryHeader = document.getElementById("primary-header");
const logo = document.getElementById("logo");
let darkMode = localStorage.getItem("darkMode");

let dText = document.getElementById("dText");

const submit = document.getElementById("submit");

btn.addEventListener("click", () => {
  const visibility = ul.getAttribute("data-visibility");
  const cross = btn.getAttribute("cross");
  visibility === "false"
    ? ul.setAttribute("data-visibility", true)
    : ul.setAttribute("data-visibility", false);
  cross === "false"
    ? btn.setAttribute("cross", true)
    : btn.setAttribute("cross", false);
});
ul.addEventListener("click", () => {
  ul.setAttribute("data-visibility", false);
  btn.setAttribute("cross", false);
});

const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  document.body.classList.remove("lightMode");
  localStorage.setItem("darkMode", "enable");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  document.body.classList.add("lightMode");
  localStorage.setItem("darkMode", null);
};

if (darkMode == "enable") {
  enableDarkMode();
}

logo.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode == "enable" ? disableDarkMode() : enableDarkMode();
});

let dynamicText = ["EFFICIENT ", "PROFESSIONAL ", "LOOKING GOOD ", "AMAZING "];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === dynamicText.length) {
    count = 0;
  }
  currentText = dynamicText[count];
  letter = currentText.slice(0, ++index);
  dText.innerText = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 300);
})();

window.onscroll = () => {
  window.scrollY > 22
    ? primaryHeader.classList.add("scroll")
    : primaryHeader.classList.remove("scroll");
};

submit.addEventListener("click", function (e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetLeft;
  console.log(x, y - 100);
  let ripple = document.createElement("span");
  ripple.style.top = `${y - 150}px`;
  ripple.style.left = `${x}px`;
  this.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 600);
});
