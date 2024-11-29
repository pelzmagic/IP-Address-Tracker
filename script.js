"use strict";

const domainInput = document.querySelector(".input_text");
const searchButton = document.querySelector(".searchbtn");
const map = L.map("map").setView([0, 0], 1);
L.tileLayer("https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=xeJBV4khk9LPhmumCCz9", {
  attribution:
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);
const marker = L.marker([41.5, -0.09]).addTo(map);

//   searchButton.addEventListener("click", () => {
//     const textInput = domainInput.value.toLowerCase();

//     async function fetchData() {
//       try {
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   })
// );
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
