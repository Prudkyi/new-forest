import * as prdkFunctions from "./modules/functions.js";

prdkFunctions.isWebP();

/* changes in direction */

let elA = document.querySelectorAll("a"),
    elH1 = document.querySelectorAll("h1"),
    elH2 = document.querySelectorAll("h2"),
    elH3 = document.querySelectorAll("h3"),
    elH4 = document.querySelectorAll("h4"),
    elH5 = document.querySelectorAll("h5"),
    elH6 = document.querySelectorAll("h6"),
    elInput = document.querySelectorAll("input"),
    elP = document.querySelectorAll("p");

for (let elem of elA) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elH1) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elH2) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elH3) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elH4) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elH5) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elH6) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elInput) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elP) {
    elem.setAttribute("dir", "rtl");
}

/* END changes in direction */

/* list country */

let butListCountry = document.getElementById("form_1"),
    listCountry = document.getElementById("form_list_1"),
    listCountryOpen = false;

butListCountry.onclick = function () {
    if (!listCountryOpen){
        listCountryOpen = true;
        listCountry.classList.remove("upper__form__listAll--closed");
    }
    else {
        listCountryOpen = false;
        listCountry.classList.add("upper__form__listAll--closed");
    }
}

/* END list county */
