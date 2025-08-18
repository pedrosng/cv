export const buildTitle = (title, infoSection) => {
  const h1 = document.createElement("h1");
  h1.textContent = title;
  infoSection.appendChild(h1);
};

export const buildContact = (infoData, infoSection) => {
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

export const buildHyperlinks = (infoData, infoSection) => {
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

export const buildCards = (infoData, infoSection) => {
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

export const buildProfile = (contentData, infoSection) => {
  const p = document.createElement("p");
  p.textContent = contentData.content;
  infoSection.appendChild(p);
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
