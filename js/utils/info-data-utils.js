let infoDiv;
let infoSection;

let contentDiv;

export const loadContentSections = (alias, contentData) => {
  contentDiv = document.querySelector(".content");

  const contentSection = document.createElement("div");
  contentSection.classList.add(alias);

  buildTitle(contentData.title, contentSection);

  if (contentData.title == "Profile") {
    buildContact(contentData, contentSection);
  }

  if (contentData.title == "Experience") {
    buildCards(contentData, contentSection);
  }

  contentDiv.appendChild(contentSection);
};

export const loadInfoSections = (alias, infoData) => {
  infoSection = document.querySelector(alias);
  infoDiv = document.querySelector(".info");

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

  infoDiv.appendChild(infoSection);
};

const buildTitle = (title, div) => {
  const h1 = document.createElement("h1");
  h1.textContent = title;
  div.appendChild(h1);
};

const buildContact = (infoData, infoSection) => {
  const contactData = filterTitleOnInfoData(infoData);
  const infoCard = createInfoCard();

  Object.keys(contactData).forEach((key) => {
    if (key == "email") {
      loadEmail(contactData[key], infoCard);
      return;
    }

    let p = document.createElement("p");
    p.textContent = key + ": " + contactData[key];
    infoCard.appendChild(p);
  });

  infoSection.appendChild(infoCard);
};

const buildHyperlinks = (infoData, infoSection) => {
  const hyperlinks = filterTitleOnInfoData(infoData);
  const infoCard = createInfoCard();

  Object.keys(hyperlinks).forEach((key) => {
    const p = document.createElement("p");

    const a = document.createElement("a");
    a.href = hyperlinks[key];
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = key;

    p.appendChild(a);
    infoCard.appendChild(p);
  });

  infoSection.appendChild(infoCard);
};

const buildCards = (infoData, infoSection) => {
  const educationData = filterTitleOnInfoData(infoData);

  const educationEntrie = Object.keys(educationData).map(
    (key) => educationData[key]
  );

  educationEntrie.forEach((element) => {
    const infoCard = createInfoCard();

    Object.keys(element).forEach((key) => {
      let p = document.createElement("p");
      p.textContent = element[key];
      infoCard.appendChild(p);
    });
    infoSection.appendChild(infoCard);
  });
};

const filterTitleOnInfoData = (infoData) => {
  return Object.fromEntries(
    Object.entries(infoData).filter(([key]) => key !== "title")
  );
};

const loadEmail = (email, div) => {
  let p = document.createElement("p");
  p.appendChild(document.createTextNode("email: "));
  const a = document.createElement("a");
  a.href = "mailto:" + email;
  a.textContent = email;
  p.appendChild(a);
  div.appendChild(p);
};

const createInfoCard = () => {
  const infoCard = document.createElement("div");
  infoCard.classList.add("info-card");
  return infoCard;
};
