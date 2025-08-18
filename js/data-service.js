import {
  buildTitle,
  buildContact,
  buildHyperlinks,
  buildCards,
  buildProfile,
} from "./data/data-utils.js";

export const loadInfoSections = (alias, infoData) => {
  let infoSection = document.querySelector(alias);

  buildTitle(infoData.title, infoSection);

  if (infoData.title == "Contact") {
    buildContact(infoData, infoSection);
  }

  if (infoData.title == "Hyperlinks") {
    buildHyperlinks(infoData, infoSection);
  }

  if (infoData.title == "Education") {
    buildCards(infoData, infoSection);
  }

  if (infoData.title == "Tech Skills") {
    buildCards(infoData, infoSection);
  }

  if (infoData.title == "Profile") {
    buildProfile(infoData, infoSection);
  }

  if (infoData.title == "Experience") {
    buildCards(infoData, infoSection);
  }
};
