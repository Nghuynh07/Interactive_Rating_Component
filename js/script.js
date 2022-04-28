const container = document.querySelector(".wrapper-stars");
const form = document.querySelector("form");
const front = document.querySelector(".wrapper");
const thankyou = document.querySelector(".thankyou");
const stars = document.querySelectorAll(".wrapper-btn");
const h3 = document.querySelector(".thankyou-content h3");
const starData = document.querySelector(".wrapper-btn");

container.addEventListener("click", function (e) {
  const target = e.target.classList.contains("wrapper-btn");
  if (!target) return;

  stars.forEach((b) => {
    b.classList.remove("active");
  });

  e.target.classList.add("active");
});

let test;

const star = (e) => {
  e.preventDefault();

  stars.forEach((s) => {
    if (s.classList.contains("active")) {
      front.style.display = "none";
      thankyou.style.display = "grid";
      localStorage.setItem("star", `${s.dataset.star}`);
    } else {
      return;
    }
    h3.textContent = `You selected ${localStorage.getItem("star")} out of 5`;
  });
};

form.addEventListener("submit", star);
localStorage.clear();
