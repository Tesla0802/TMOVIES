const searchinput = document.querySelector(["data-search"]);
searchinput.addEventListener("input", (e) => {
  const value = e.target.value;
  user.forEach((user) => {
    const isVisible = user.name.includes(value) || user.emale.includes(value);
    user.element.classlist.taggle("hide", !isVisible);
  });
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    return { name: user.name, email: user.email, element: card };
  });