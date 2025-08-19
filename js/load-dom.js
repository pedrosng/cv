const domElements = {
  info: ["contact", "hyperlinks", "education", "competences"],
  picture: ["picture-wrapper"],
  main: ["header", "content"],
};

const mobileDomElements = {
  picture: domElements.picture,
  main: domElements.main,
  info: domElements.info,
};

export const loadLargeScreenDom = () => {
  const cv = document.querySelector(".cv");

  Object.keys(domElements).forEach((parentDomElementClassName) => {
    let cvSection = document.createElement("div");
    cvSection.classList.add(parentDomElementClassName);

    createChildElements(parentDomElementClassName, cvSection, domElements);

    cv.appendChild(cvSection);
  });

  createContentDivChildElements();
};

export const loadSmallScreenDom = () => {
  const cv = document.querySelector(".cv");

  Object.keys(mobileDomElements).forEach((parentDomElementClassName) => {
    let cvSection = document.createElement("div");
    cvSection.classList.add(parentDomElementClassName);

    createChildElements(
      parentDomElementClassName,
      cvSection,
      mobileDomElements
    );

    cv.appendChild(cvSection);
  });

  createContentDivChildElements();
};

const createChildElements = (parentElement, cvSection, domElements) => {
  domElements[parentElement].forEach((childElementClassName) => {
    let childElement = document.createElement("div");
    childElement.classList.add(childElementClassName);
    cvSection.appendChild(childElement);
  });
};

const createContentDivChildElements = () => {
  const contentDiv = document.querySelector(".content");

  const profileDiv = document.createElement("div");
  profileDiv.classList.add("profile");

  const experienceDiv = document.createElement("div");
  experienceDiv.classList.add("experience");

  contentDiv.appendChild(profileDiv);
  contentDiv.appendChild(experienceDiv);
};
