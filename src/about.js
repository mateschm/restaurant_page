import gus from "./gus.jpg";

const about = function () {
    const content = document.querySelector(`#content`)
    content.innerHTML = ``;
    const paragraph = document.createElement(`p`);
    paragraph.textContent = `Los Pollos Hermanos was founded by Gus Fring in Albuquerque in 1998. The restaurant is loved both by locals and tourists. Come visit us, you will not be disappointed! - Gus`;
    const image = document.createElement(`img`);
    image.setAttribute(`class`, `gus`);
    image.src = gus;
    content.appendChild(paragraph);
    content.appendChild(image);
}

export {about};