window.addEventListener("load", (event) => {
  checkWidth();
});
window.addEventListener("resize", (event) => {
  checkWidth();
});

const usd5000 = document.getElementById("usd5000");
const usd2000 = document.getElementById("usd2000");
const usd1000 = document.getElementById("usd1000");

function checkWidth() {
  let windowWidth = window.innerWidth;
  if (windowWidth >= 1600) {
    [usd5000, usd2000, usd1000].map((el) =>
      el.closest(".input-label").classList.remove("hide")
    );
  } else if (windowWidth >= 1000 && windowWidth < 1600) {
    usd5000.closest(".input-label").classList.add("hide");
  } else if (windowWidth < 1000) {
    [usd5000, usd2000, usd1000].map((el) =>
      el.closest(".input-label").classList.add("hide")
    );
  }
}
