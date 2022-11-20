"use strict";
const apiUrl = "https://api.tvmaze.com/search/shows?q=";
//get references to DOM elements
const form = document.querySelector("#search-form");
const button = form.querySelector("button");
const input = form.querySelector("input");
const results = document.querySelector("#results");

button.addEventListener("click", (event) => {
  //do not submit the form to anywhere (no page refresh)
  event.preventDefault();
  // prevent the generic event listener at the  bottom
  event.stopPropagation();
  if (input.value.length > 1) {
    getTVSeriesData(input.value);
  }
});

const renderResults = (data) => {
  //clear existing results before appending new ones
  results.innerHTML = "";
  // loop through all search results
  console.log("data", data);
  for (let i = 0; i < data.length; i++) {
    const h3 = document.createElement("h3");
    h3.textContent = data[i].show.name;
    const img = document.createElement("img");

    const summary = document.createElement("p");
    summary.innerHTML = data[i].show.summary;
    const genres = document.createElement("p");

    const genre = ["Genre not available"];
    data[i].show.genres.length == 0
      ? (genres.innerHTML = `Genres: ${genre}`)
      : (genres.innerHTML = `Genres: ${data[i].show.genres.join(" | ")}`);

    const url = document.createElement("links");
    data[i].show.officialSite == null
      ? (url.textContent = " Link not available")
      : (url.textContent = `Link: ${data[i].show.officialSite}`);

    data[i].show.image != null
      ? (img.src = data[i].show.image.medium)
      : (img.src = "http://placekitten.com/321/241");

    results.append(h3);
    results.append(img);
    results.append(summary);
    results.append(genres);
    results.append(url);

    //TODO: render more data from the results
  }
};

const getTVSeriesData = async (name) => {
  try {
    const response = await fetch(apiUrl + name);
    const data = await response.json();
    renderResults(data);
  } catch (error) {
    console.log("network failure", error);
  }
};

//generic event handling example
document.addEventListener("click", (event) => {
  console.log("mouse clicked somewhere on the page", event);
});
