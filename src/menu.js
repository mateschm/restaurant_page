import burrito from "./burrito.png";
import nachos from "./nachos.png";
import taco from "./taco.png";

const menu = function () {
    const content = document.querySelector(`#content`)
    content.innerHTML = ``;

    const image = document.createElement(`img`);
    const paragraph = document.createElement(`p`);
    image.src = burrito;
    paragraph.innerHTML = "<p>BURRITO<br>$14.99</p>"
    content.appendChild(image);
    content.appendChild(paragraph);

    const image2 = document.createElement(`img`);
    const paragraph2 = document.createElement(`p`);
    image2.src = nachos;
    paragraph2.innerHTML = "<p>NACHOS<br>$9.99</p>"
    content.appendChild(image2);
    content.appendChild(paragraph2);

    const image3 = document.createElement(`img`);
    const paragraph3 = document.createElement(`p`);
    image3.src = taco;
    paragraph3.innerHTML = "<p>TACO<br>$12.99</p>"
    content.appendChild(image3);
    content.appendChild(paragraph3);
}

export {menu};