"use strict";

const left = document.querySelector(".leftside");
const right = document.querySelector(".rightside");
const container = document.querySelector(".container");
const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");
const icn = document.querySelector(".icn");
const ux = document.querySelector(".ux");

left.addEventListener("mouseover", () => {
  container.classList.add("hover-left");
  info1.classList.remove("hidden");
  ux.classList.add("hidden");
  document.getElementById("purple").style.color = "#360168";
  document.getElementById("purple1").style.color = "#360168";
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
  info1.classList.add("hidden");
  ux.classList.remove("hidden");
  document.getElementById("purple").style.color = "#ffea00";
  document.getElementById("purple1").style.color = "#ffea00";
});

right.addEventListener("mouseover", () => {
  container.classList.add("hover-right");
  info2.classList.remove("hidden");
  icn.classList.add("hidden");
  document.getElementById("yellow").style.color = "#ffea00";
  document.getElementById("yellow1").style.color = "#ffea00";
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
  info2.classList.add("hidden");
  icn.classList.remove("hidden");
  document.getElementById("yellow").style.color = "#360168";
  document.getElementById("yellow1").style.color = "#360168";
});
