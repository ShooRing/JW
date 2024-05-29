const mainBanner = () => {
  let swiper = new Swiper(".mainVisual", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,

    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
//이벤트배너 (hover 및 con1~4 기타 javascript 기능)
const eventBanner = () => {
  //con1
  //con2
  var swiper = new Swiper(".con3Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //con3

  var swiper = new Swiper(".con4Swiper", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,

    autoplay: {
      delay: 5000,
    },

    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  //con4
};

//합치기
const mainInit = () => {
  mainBanner();
  eventBanner();
};

//즉시실행
(() => {
  mainInit();
})();

//전체 공통
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

window.addEventListener("scroll", function () {
  const element = document.querySelector(".main .con2 .con2Txt");
  const elementPosition = element.getBoundingClientRect().top;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 1000) {
    element.classList.add("animate");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector(".main .con2 .con2Txt");
  const elementPosition = element.getBoundingClientRect().top;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 1000) {
    element.classList.add("animate");
  }
});

window.addEventListener("scroll", function () {
  const element = document.querySelector(".main .con6 .map");
  const elementPosition = element.getBoundingClientRect().top;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 5500) {
    element.classList.add("animate");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector(".main .con6 .map");
  const elementPosition = element.getBoundingClientRect().top;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 5500) {
    element.classList.add("animate");
  }
});

window.addEventListener("scroll", function () {
  const element = document.querySelector(".main .con6 .img");
  const elementPosition = element.getBoundingClientRect().top;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 5500) {
    element.classList.add("animate");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector(".main .con6 .img");
  const elementPosition = element.getBoundingClientRect().top;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 5500) {
    element.classList.add("animate");
  }
});
