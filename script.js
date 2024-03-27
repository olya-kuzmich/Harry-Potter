import { data } from "./data.js";
let input = document.querySelector("input");
let cards = document.querySelector(".cards");
let select = document.querySelector("select");
function push(ar) {
  ar.forEach((el) => {
    let card = document.createElement("article");
    if (el.wand.core == "") {
      el.wand.core = "material unknown";
    } else if (el.alive == "") {
      el.alive = "unknown";
    } else if (el.house == "") {
      el.house = "unknown";
    }
    card.innerHTML = `
 <div class="img"><img src="${el.image}" alt="${el.name}"/></div>
            <div class="cards__text">
            <h2>${el.name}</h2>
            <p>Actor: ${el.actor}</p>
            <p>Gender: ${el.gender}</p>
            <p>House: ${el.house}</p>
            <p>Wand core: ${el.wand.core}</p>
            <p>Alive: ${el.alive}</p>
 `;
    cards.append(card);
  });
}
push(data);
input.addEventListener("input", function () {
  let arr = arrhouse.filter(
    (el) =>
      el.name.toLowerCase().includes(input.value.trim().toLowerCase()) ||
      el.actor.toLowerCase().includes(input.value.trim().toLowerCase())
  );
  cards.innerHTML = "";
  push(arr);
});
let arrhouse;
select.addEventListener("change", function () {
  arrhouse = data.filter((el) => el.house.includes(select.value));
  cards.innerHTML = "";
  push(arrhouse);
});
