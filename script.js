// const searchinput = document.querySelector(["data-search"]);
// searchinput.addEventListener("input", (e) => {
//   const value = e.target.value;
//   user.forEach((user) => {
//     const isVisible = user.name.includes(value) || user.emale.includes(value);
//     user.element.classlist.taggle("hide", !isVisible);
//   });
// });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     return { name: user.name, email: user.email, element: card };
//   });

let scrollPrecentage = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  scrollProgress.style.background = `conic-gradient(#009c7c ${scrollValue}%, #2b2f38 ${scrollValue}%)`;
};
window.onscroll = scrollPrecentage;
window.onload = scrollPrecentage;

$(window).scroll(function () {
  if ($(document).scrollTop() > 20) {
    $(".navigation").addClass("fix-icon");
  } else {
    $(".navigation").removeClass("fix-icon");
  }
});

$(document).on("click", ".play-btn a", function () {
  $(".play").addClass("active-popup");
});

$(document).on("click", ".close-movie", function () {
  $(".play").removeClass("active-popup");
});

$(".play-btn a").click(function () {
  $("#m-video")[0].play();
});

$(".close-movie").click(function () {
  $("#m-video")[0].pause();
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 20) {
    $(".navigation").addClass("fix-icon");
  } else {
    $(".navigation").removeClass("fix-icon");
  }
});
