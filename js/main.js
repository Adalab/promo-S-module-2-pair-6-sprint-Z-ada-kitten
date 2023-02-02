"use strict";

/*const newForm = document.querySelector('.js-new-form');
newForm.classList.remove("collapsed")*/
const listElement = document.querySelector(".js-list");

/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */

const kittenOneContent = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">${kittenNameOne}</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;
listElement.innerHTML = kittenOneContent;
const kittenImageOne = 'https://dev.adalab.es/gato-siames.webp';
const kittenNameOne = 'Anastacio';
const kittenDescOne =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRaceOne = 'Siamés';

const kittenTwoContent = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/sphynx-gato.webp"
    alt="sphynx-cat"
    />
    <h3 class="card_title">${kittenNameTwo}</h3>
    <h4 class="card_race">Sphynx</h4>
    <p class="card_description">
              Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
              hasta con pinta de alienígena han llegado a definir a esta raza
              gatuna que se caracteriza por la «ausencia» de pelo.
    </p>
</article>
</li>`;
listElement.innerHTML = kittenOneContent + kittenTwoContent;
const kittenImageTwo = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenNameTwo = 'Fiona';
const kittenDescTwo =
  'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo. ';
const kittenRaceTwo = 'Sphynx';

const kittenThreeContent = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/maine-coon-cat.webp"
    alt="maine-coon-cat"
    />
    <h3 class="card_title">${kittenNameThree}</h3>
    <h4 class="card_race">Maine Coon</h4>
    <p class="card_description">
            Tienen la cabeza cuadrada y los     ojos simétricos, por lo que su
              bella mirada se ha convertido en una de sus señas de identidad.
              Sus ojos son grandes y las orejas resultan largas y en punta.
            </p>
</article>
</li>`;
listElement.innerHTML = kittenOneContent + kittenTwoContent + kittenThreeContent;
const kittenImageThree = 'https://dev.adalab.es/maine-coon-cat.webp"';
const kittenNameThree = 'Cielo';
const kittenDescThree =
  'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta. ';
const kittenRaceThree = 'Maine Coon';