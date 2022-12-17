export default function createContact () {
    const cont = document.getElementById("content");

    const h1 = document.createElement("h1");
    h1.textContent = "contact";
    cont.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = "to contact send a pidgeon to me";
    cont.appendChild(p);
}      