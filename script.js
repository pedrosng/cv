import { loadDom } from "./js/load-dom.js";
import { loadData } from "./js/data-controller.js";

window.addEventListener("DOMContentLoaded", () => {
  buildView();
});

window.addEventListener("resize", () => {
  clearDom();
  buildView();
});

const buildView = () => {
  loadDom(window.innerWidth);
  loadData(window.innerWidth);
};

const clearDom = () => {
  let cv = document.querySelector(".cv");
  cv.innerHTML = "";
};
