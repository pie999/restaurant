export default function createHome () {
    const cont = document.getElementById("content");

    const h1 = document.createElement("h1");
    h1.textContent = "pie's pizza pies";
    cont.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = "hello im pie and i make pizza its very gooooood";
    cont.appendChild(p);

    const img = document.createElement("img");
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1p8w6TYqfFe7TYi99aJJqx7ixkqO8-UmFt2RIlEFmK6IUW959PyxHnqEXtKJBcuo5GQ&usqp=CAU";
    cont.appendChild(img);
}      
