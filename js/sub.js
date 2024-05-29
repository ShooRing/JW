const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

let $links = getAll('a[href="#"]');
$links.forEach((link, idx) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const navi = () => {
  let $gnbli = getAll("#header .nav .gnb li");
  $gnbli.forEach((li, idx) => {
    li.addEventListener("mouseenter", (e) => {
      e.currentTarget.classList.add("on");
    });
    li.addEventListener("mouseleave", (e) => {
      e.currentTarget.classList.remove("on");
    });
  });
};

const footerInfo1 = () => {
  const $title = document.querySelectorAll("#footer .left .info1 .info1Title");
  const $desc = document.querySelectorAll("#footer .left .info1 .info1Desc");

  $title.forEach((title, index) => {
    title.addEventListener("click", () => {
      $desc[index].classList.toggle("on");
    });
  });
};
const footerInfo2 = () => {
  const $title = document.querySelectorAll("#footer .left .info2 .info2Title");
  const $desc = document.querySelectorAll("#footer .left .info2 .info2Desc");

  $title.forEach((title, index) => {
    title.addEventListener("click", () => {
      $desc[index].classList.toggle("on");
    });
  });
};

footerInfo1();
footerInfo2();

function handleAnimation() {
  const element = document.querySelector(".sub1 .con2_roomInfo .imgS");
  const elementPosition = element.getBoundingClientRect().top;
  const scrollPosition = window.scrollY;
  if (scrollPosition >= 1600) {
    element.classList.add("animate");
  }
}
window.addEventListener("scroll", handleAnimation);
document.addEventListener("DOMContentLoaded", handleAnimation);

window.addEventListener("scroll", function () {
  const element = document.querySelector(".sub1 .con3_reservation .txt");
  const elementPosition = element.getBoundingClientRect().top;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 2000) {
    element.classList.add("animate");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector(".sub1 .con3_reservation .txt");
  const elementPosition = element.getBoundingClientRect().top;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 3000) {
    element.classList.add("animate");
  }
});
