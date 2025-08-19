import * as data from "./data/data.js";
import { loadInfoSections } from "./data-service.js";

export const loadData = (windowSize) => {
  if (windowSize <= 980) {
    loadDataForSmallDom();
  } else {
    loadDataForLargeDom();
  }
};

const loadDataForLargeDom = () => {
  loadInfoData(data.info);
  loadPicture(data.picture);
  loadHeader(data.header);
  loadInfoData(data.content);
};

const loadDataForSmallDom = () => {
  loadPicture(data.picture);
  loadHeader(data.header);
  loadInfoData(data.content);
  loadInfoData(data.info);
};

const loadInfoData = (infoData) => {
  Object.keys(infoData).forEach((key) =>
    loadInfoSections("." + key + "", infoData[key])
  );
};

const loadPicture = (pictureData) => {
  const wrapperDiv = document.querySelector(".picture-wrapper");
  const img = document.createElement("img");
  img.src = pictureData.src;
  img.alt = pictureData.alt;
  wrapperDiv.appendChild(img);
};

const loadHeader = (headerData) => {
  const headerDiv = document.querySelector(".header");

  const nameDiv = document.createElement("div");
  nameDiv.classList.add("name");
  const nameH1 = document.createElement("h1");
  nameH1.textContent = headerData.name;
  nameDiv.appendChild(nameH1);

  const positionDiv = document.createElement("div");
  positionDiv.classList.add("position");
  const positionH1 = document.createElement("h1");
  positionH1.textContent = headerData.position;
  positionDiv.appendChild(positionH1);

  headerDiv.appendChild(nameDiv);
  headerDiv.appendChild(positionDiv);
};
