let toggle = false;
const log = console.log;

const handleResponsiveNavbar = (toggle) => {
  if (!toggle) {
    document.querySelector("body").style.overflowY = "scroll";
    document.getElementById("mobile").style.display = "none";
    document.querySelector("#toggler > button").setAttribute("id", "");
  } else {
    document.querySelector("body").style.overflowY = "hidden";
    document.getElementById("mobile").style.display = "block";
    document.querySelector("#toggler > button").setAttribute("id", "toggled");
  }
};

window.matchMedia("(min-width: 575.98px)").addEventListener("change", () => {
  toggle = false;
  handleResponsiveNavbar(toggle);
});
document.getElementById("toggler").addEventListener("click", () => {
  toggle = !toggle;
  handleResponsiveNavbar(toggle);
});
