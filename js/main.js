"use strict";

const newForm = document.querySelector('.js-new-form');
/*newForm.classList.remove("collapsed")*/
const listElement = document.querySelector(".js-list");
const input_search_desc = document.querySelector('.js_in_search_desc');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const btnAdd = document.querySelector('.js-btn-add');
const btnCancel = document.querySelector('.js-btn-cancel');
const button = document.querySelector('.js-button');
const btnSearch = document.querySelector('.js-btn-search');

//variable de gato UNO
const kittenImageOne = 'https://dev.adalab.es/gato-siames.webp';
const kittenNameOne = 'Anastacio';
const kittenDescOne =
  ' Porte elegante, risueño, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRaceOne = 'Siamés';

//variable de gato DOS
const kittenImageTwo = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenNameTwo = 'Fiona';
const kittenDescTwo =
  'Produce fascinación y curiosidad. Exótico, risueño, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo. ';
const kittenRaceTwo = 'Sphynx';

//variable de gato TRES
const kittenImageThree = 'https://dev.adalab.es/maine-coon-cat.webp"';
const kittenNameThree = 'Cielo';
const kittenDescThree =
  'Tienen la cabeza cuadrada y los ojos simétricos, risueño, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta. ';
const kittenRaceThree = 'Maine Coon';


// ---------------------------ESTAS SON FUNCIONES--------------------
function renderKitten(url, desc, name, race) {
  const kittenContent = `<li class="card">
<article>
  <img
    class="card_img"
    src= "${url}"
    alt="gatito"
    
  />
  <h3 class="card_title">${name}</h3>
  <h4 class="card_race">${race}</h4>
  <p class="card_description">
            ${desc}
   </p>
</article>
</li>`;
return kittenContent;

}

function addNewKitten(event) {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {

  labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo"
  //completa el código
} else {
  //completa el código
}
}


function showNewCatForm() {
  newFormElement.classList.remove('collapsed');

}


function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

const filterKitten = (event) => {
  event.preventDefault();
}

const cancelNewKitten = (event) => {
  event.preventDefault();
  newForm.classList.add('collapsed');
}


const descrSearchText = input_search_desc.value;


if( kittenDescOne.includes(descrSearchText) ) {
 listElement.innerHTML = renderKitten(kittenImageOne, kittenDescOne, kittenNameOne, kittenRaceOne );
}

if( kittenDescTwo.includes(descrSearchText) ) {
 listElement.innerHTML += renderKitten(kittenImageTwo, kittenDescTwo, kittenNameTwo, kittenRaceTwo);
}

if( kittenDescThree.includes(descrSearchText) ) {
 listElement.innerHTML += renderKitten(kittenImageThree, kittenDescThree, kittenNameThree, kittenRaceThree);
}


// -------------------------ESTOS SON LOS EVENTOS-------------------------------
button.addEventListener('click', (event) => {
  //console.log('Holiis');
  event.preventDefault();
if (newForm.classList.contains('collapsed')) {
  newForm.classList.remove('collapsed');
} else {
 newForm.classList.add('collapsed');
}
});

btnAdd.addEventListener('click', addNewKitten);



btnCancel.addEventListener('click', cancelNewKitten);

buttonSearch.addEventListener('click', filterKitten);
