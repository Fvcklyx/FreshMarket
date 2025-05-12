document.querySelector(".toggle").addEventListener("click", () => {
  document.querySelector(".links").classList.toggle("active");
});

function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);

  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const scroll1 = document.getElementById("link1");
const scroll2 = document.getElementById("link2");
const scroll3 = document.getElementById("link3");

scroll1.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToElement(".excellence-box");
});

scroll2.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToElement(".box-product");
});

scroll3.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToElement(".about");
});

document.querySelector(".logout").addEventListener("click", () => {
  window.location.href = "../index.html";
});
