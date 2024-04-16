const firstDiv = document.getElementById("header");
const subHeading = document.createElement("h3");

const subHeadingText = document.createTextNode("Buy high quality organic fruits online");
firstDiv.appendChild(subHeading);
const head = document.querySelector("#first-div h3");


subHeading.style.fontStyle = "italic";
const secondDiv = document.getElementById("basket-heading");
const totalFruitsParagraph = document.createElement("p");
totalFruitsParagraph.setAttribute("id", "fruits-total");
const totalFruitsText = document.createTextNode("Total fruits: 4");
totalFruitsParagraph.appendChild(totalFruitsText);
secondDiv.insertBefore(totalFruitsParagraph, secondDiv.firstChild);


