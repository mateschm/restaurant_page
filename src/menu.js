const menu = function () {
    const content = document.querySelector(`#content`)
    content.innerHTML = ``;
    const container = document.createElement(`div`);
    const paragraph = document.createElement(`p`);
    paragraph.textContent = `Los Pollos Hermanos is a family friendly restaurant with Mexican cuisine. Enjoy!`;
    const image = document.createElement(`img`);
    image.setAttribute(`class`, `building`);
    image.src = building;
    content.appendChild(header);
    content.appendChild(paragraph);
    content.appendChild(image);
    
}

export {menu};