"use strict";

const domainInput = document.querySelector(".input_text");
const searchButton = document.querySelector(".searchbtn");
const map = L.map("map").setView([6.5244, 3.3792], 13);
const addressDetails = document.querySelectorAll(".content");
L.tileLayer("https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=xeJBV4khk9LPhmumCCz9", {
  attribution:
    '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);
let marker;

searchButton.addEventListener("click", () => {
  const textInput = domainInput.value.toLowerCase();

  async function fetchData() {
    try {
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_NvCfQF7sEBjaKxcZElps1dpRYxfY3&ipAddress=${textInput}`);
      domainInput.value = "";

      if (!response.ok) {
        throw new Error("Could not fetch response");
      }
      const data = await response.json();
      addressDetails[0].textContent = data.ip;
      addressDetails[1].textContent = `${data.location.city}, ${data.location.country} ${data.location.postalCode}`;
      addressDetails[2].textContent = data.location.timezone;
      addressDetails[3].textContent = data.isp;
      map.flyTo([data.location.lat, data.location.lng], 13);
      marker = L.marker([data.location.lat, data.location.lng], 13).addTo(map);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
});
// );
