import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

const cont = document.getElementById("content");

const homeBut = document.querySelector(".homeBut");
const menuBut = document.querySelector(".menuBut");
const contactBut = document.querySelector(".contactBut");

homeBut.addEventListener("click", () => {
    while (cont.firstChild) cont.removeChild(cont.firstChild);
    createHome();
});

menuBut.addEventListener("click", () => {
    while (cont.firstChild) cont.removeChild(cont.firstChild);
    createMenu();
});

contactBut.addEventListener("click", () => {
    while (cont.firstChild) cont.removeChild(cont.firstChild);
    createContact();
});

createHome();