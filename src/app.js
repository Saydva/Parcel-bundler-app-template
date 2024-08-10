let search = document.querySelector("#search");
let debug = document.querySelector("#dtext");

search.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (search.value) {
    debug.innerText = search.value;
  } else {
    debug.innerText = "debug";
  }
});
