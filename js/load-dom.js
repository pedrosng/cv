export const loadDom = (windowSize) => {
  const cv = document.querySelector(".cv");
  const domElements = getDomElements(windowSize);

  Object.keys(domElements).forEach((parentDomElementClassName) => {
    let cvSection = document.createElement("div");
    cvSection.classList.add(parentDomElementClassName);

    createChildElements(parentDomElementClassName, cvSection, domElements);

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

const getDomElements = (windowSize) => {
  const domElements = {
    info: ["contact", "hyperlinks", "education", "competences"],
    picture: ["picture-wrapper"],
    main: ["header", "content"],
  };

  if (windowSize <= 980) {
    return {
      picture: domElements.picture,
      main: domElements.main,
      info: domElements.info,
    };
  }

  return domElements;
};
