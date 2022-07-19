document.addEventListener("DOMContentLoaded", initSlider);

let imgNumber = 0;
let dotsNavigation = {};
let listNavigation = {};

let images = [{
    url: "img/image0.png",
    heading: `Rostov-on-Don<br> LCD admiral`,
    apartmentArea: "81 m2",
    repairTime: "3.5 months",
    cost: "Upon request"
}, {
    url: "img/image1.png",
    heading: `Sochi<br> Thieves`,
    apartmentArea: "105 m2",
    repairTime: "4 months",
    cost: "Upon request"
}, {
    url: "img/image2.png",
    heading: `Rostov-on-Don<br> Patriotic`,
    apartmentArea: "93 m2",
    repairTime: "3 months",
    cost: "Upon request"
}];

function initSlider() {
    dotsNavigation = document.querySelectorAll(".circle");
    listNavigation = document.querySelectorAll(".nav-list_2 a")
    arrowsNav();
    checkDotsNav();
    checkListNav();
};

function arrowsNav() {
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");

    leftArrow.addEventListener("click", getPreviosNumber);
    rightArrow.addEventListener("click", getNextNumber);
};

function getPreviosNumber() {
    imgNumber = imgNumber === 0 ? images.length - 1 : imgNumber - 1;
    showData(imgNumber);
};

function getNextNumber() {
    imgNumber = imgNumber === images.length - 1 ? 0 : imgNumber + 1;
    showData(imgNumber);
};

function checkDotsNav() {
    setNumber(dotsNavigation);
};

function checkListNav() {
    setNumber(listNavigation);
};

function setNumber(list) {
    list.forEach((element, number) =>{
        element.addEventListener("click", () => {
            imgNumber = number;
            showData(number);
        });
    });
};

function showData(imgNumber) {
    const city = document.querySelector("#city");
    const area = document.querySelector("#area");
    const time = document.querySelector("#time");
    const cost = document.querySelector("#cost");
    const sliderImg = document.querySelector("#image");

    city.innerHTML = images[imgNumber].heading;
    area.innerHTML = images[imgNumber].apartmentArea;
    time.innerHTML = images[imgNumber].repairTime;
    cost.innerHTML = images[imgNumber].cost;

    sliderImg.setAttribute("src", `${images[imgNumber].url}`);

    listNavigation.forEach((element) => (element.className = ""));
    dotsNavigation.forEach((element) => (element.className = "dot"));
  
    listNavigation[imgNumber].className = "active";
    dotsNavigation[imgNumber].className = "dot_active";
};