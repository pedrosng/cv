import { loadLargeScreenDom, loadSmallScreenDom } from "./js/load-dom.js";
import {
  loadDataForLargeDom,
  loadDataForSmallDom,
} from "./js/data-controller.js";

let loadDom;
let loadData;

window.addEventListener("DOMContentLoaded", () => {
  buildView();
});

window.addEventListener("resize", () => {
  clearDom();
  buildView();
});

const checkWindowSize = () => {
  if (window.innerWidth <= 980) {
    loadDom = loadSmallScreenDom;
    loadData = loadDataForSmallDom;
  } else {
    loadDom = loadLargeScreenDom;
    loadData = loadDataForLargeDom;
  }
};

const buildView = () => {
  checkWindowSize();
  loadDom();
  loadData();
};

const clearDom = () => {
  let cv = document.querySelector(".cv");
  cv.innerHTML = "";
};
