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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
