export default function createMenu () {
    const cont = document.getElementById("content");

    const h1 = document.createElement("h1");
    h1.textContent = "menu";
    cont.appendChild(h1);

    const ul = document.createElement("ul");
    cont.appendChild(ul);

    const li1 = document.createElement("li");
    li1.textContent = "margherita";
    ul.appendChild(li1);

    const li2 = document.createElement("li");
    li2.textContent = "calzone";
    ul.appendChild(li2);

    const li3 = document.createElement("li");
    li3.textContent = "bast";
    ul.appendChild(li3);
}      