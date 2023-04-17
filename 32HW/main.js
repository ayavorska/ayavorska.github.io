"use strick";
const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const playlistElement = document.getElementById("playlistList");

for (let i = 0; i < playList.length; i++) {
  const song = playList[i];
  const listItem = document.createElement("li");
  listItem.textContent = song.author + " - " + song.song;
  playlistElement.appendChild(listItem);
}

// Task 2

const modal = document.getElementById("modal");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// Task 3

const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const colorsOrder = [red, yellow, green, yellow];

const switchBtn = document.querySelector("#switch-btn");

let currentLightIndex = 0;

colorsOrder[currentLightIndex].classList.add("active");

switchBtn.addEventListener("click", function () {
  if (currentLightIndex < colorsOrder.length - 1) {
    currentLightIndex += 1;
  } else {
    currentLightIndex = 0;
  }

  const activeCircle = document.querySelector(".circle.active");
  activeCircle.classList.remove("active");
  
  colorsOrder[currentLightIndex].classList.add("active");
});
