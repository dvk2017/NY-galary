import images from './images.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const marcup = images.reduce(
  (html, { preview, original, description, ansId }) => {
    return (html += `
        <li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
    <label for="${ansId}">${description}:</label>
  <div class="answer-check">
    <input type="number" id="${ansId}" name="quantity">
    <div class="answer-icon"></div>
  </div>
 </li>
        `);
  },
  ''
);

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', marcup);

new SimpleLightbox('.gallery .gallery-link', {
  captions: true,
  captionType: 'html',
  captionsData: 'alt',
  captionDelay: 250,
  /* options */
});

let answers = {};

const form = document.querySelector('.feedback-form');

if (localStorage.getItem('answers-state')) {
  answers = JSON.parse(localStorage.getItem('answers-state'));
}

for (const [key, value] of Object.entries(answers)) {
  document.querySelector(`#${key}`).value = value;
}

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

function onInput(evt) {
  answers[evt.target.id] = evt.target.value.trim();
  localStorage.setItem('answers-state', JSON.stringify(answers));
}

function onSubmit(evt) {
  evt.preventDefault();

  // if (Object.keys(answers).length !== 12) {
  //   alert('Fill please all fields');
  //   return;
  // }

  let totalRes = 0;
  Object.values(answers).forEach(ans => {
    totalRes += Number(ans);
  });

  totalResVolue.textContent = totalRes;
  localStorage.setItem('totalRes', totalRes);

  checkAnswers();
}

const totalResVolue = document.querySelector('#total-rez');
// totalResText.insertAdjacentHTML('beforeend', ` ${totalRes}`);

function checkAnswers() {
  for (const [key, value] of Object.entries(answers)) {
    const answerIconTag = document.querySelector(`#${key} + .answer-icon`);

    const answerIcon =
      images.find(el => el.ansId === key).trueAns === value
        ? '<div class="material-icons" style="color: green">check</div>'
        : '<div class="material-icons" style="color: red">close</div>';

    answerIconTag.innerHTML = answerIcon;
  }
}
