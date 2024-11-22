import gus from "./gus.jpg";
import directions from "./directions.png"

const about = function () {
    const content = document.querySelector(`#content`)
    content.innerHTML = ``;
    const paragraph = document.createElement(`p`);
    paragraph.textContent = `Los Pollos Hermanos was founded by Gus Fring in Albuquerque in 1998. The restaurant is loved both by locals and tourists. Come visit us, you will not be disappointed! - Gus`;
    const image = document.createElement(`img`);
    image.src = gus;
    content.appendChild(paragraph);
    content.appendChild(image);

    const paragraph2 = document.createElement(`div`);
    paragraph2.innerHTML = `<p>You can find us here:<br>4275 Isleta Blvd SW<br>Albuquerque, NM 87105, USA</p>`;
    const image2 = document.createElement(`img`);
    image2.src = directions;
    content.appendChild(paragraph2);
    content.appendChild(image2);
}

export {about};