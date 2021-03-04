var wrapperEle = document.body.querySelector(".wrapper");
var chrs = [
  { name: "Optimus Prime", class: "leader", afl: "autobot", vehicle: "truck" },
  { name: "Megatron", class: "leader", afl: "decepticon", vehicle: "tank" },
  { name: "Bumblebee", class: "scout", afl: "autobot", vehicle: "car" },
  { name: "Starscream", class: "scout", afl: "decepticon", vehicle: "plane" },
  { name: "Ironhide", class: "soldier", afl: "autobot", vehicle: "truck" },
  { name: "Brawl", class: "soldier", afl: "decepticon", vehicle: "tank" }
];

function transformer(obj) {
  var transformerEle = document.createElement("div");
  transformerEle.classList.add("character");
  var nameEle = document.createElement("div");
  nameEle.innerHTML = "Name:" + obj.name;
  transformerEle.appendChild(nameEle);
  var classEle = document.createElement("div");
  classEle.innerHTML = "Class:" + obj.class.toUpperCase();
  transformerEle.appendChild(classEle);
  var vehicleEle = document.createElement("div");
  vehicleEle.innerHTML = "Vehicle:" + obj.vehicle;
  transformerEle.appendChild(vehicleEle);
  var imgEle = document.createElement("img");
  if (obj.afl === "autobot") {
    transformerEle.classList.add("autobot");
    imgEle.src =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    transformerEle.appendChild(imgEle);
  } else {
    transformerEle.classList.add("decepticon");
    imgEle.src =
      "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    transformerEle.appendChild(imgEle);
  }

  if (obj.vehicle === "truck") {
    vehicleEle.style.color = "blue";
  }
  if (obj.vehicle === "tank") {
    vehicleEle.style.color = "green";
  }
  if (obj.vehicle === "car") {
    vehicleEle.style.color = "gold";
  }
  if (obj.vehicle === "gold") {
    vehicleEle.style.color = "white";
  }

  wrapperEle.appendChild(transformerEle);
}
for (var i = 0; i < chrs.length; i++) {
  transformer(chrs[i]);
}