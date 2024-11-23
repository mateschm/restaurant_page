import building from "./building.png"

const home = function () {
    const content = document.querySelector(`#content`)
    content.innerHTML = ``;
    const header = document.createElement(`div`);
    header.textContent = `¡Hola!`
    const paragraph = document.createElement(`p`);
    paragraph.textContent = `Los Pollos Hermanos is a family friendly restaurant with Mexican cuisine. Enjoy!`;
    const image = document.createElement(`img`);
    image.src = building;
    content.appendChild(header);
    content.appendChild(paragraph);
    content.appendChild(image);
    
}

export {home};