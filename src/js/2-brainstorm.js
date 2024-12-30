import hash from 'hash-it';

//audio file
const sound = new Audio(
  'https://raw.githubusercontent.com/Yousuke777/sound/main/kansei.mp3'
);
sound.play();

// =============   SAVE and CHECK ANSWERA   ============
let answersBs = {};

const form = document.querySelector('.feedback-form');

if (localStorage.getItem('answersBs-state')) {
  answersBs = JSON.parse(localStorage.getItem('answersBs-state'));
}

for (const [key, value] of Object.entries(answersBs)) {
  document.querySelector(`#${key}`).value = value;
}

form.addEventListener('input', onInput);

function onInput(evt) {
  answersBs[evt.target.id] = evt.target.value.trim();
  localStorage.setItem('answersBs-state', JSON.stringify(answersBs));
  checkAnswers();
}

function checkAnswers() {
  for (const [key, value] of Object.entries(answersBs)) {
    const answerIconTag = document.querySelector(`#${key} + .answer-icon`);

    const answerIcon =
      document.getElementById(key).dataset.trueans === hash(value).toString()
        ? '<div class="material-icons" style="color: green">check</div>'
        : '<div class="material-icons" style="color: red">close</div>';

    answerIconTag.innerHTML = answerIcon;
  }
}

// =========== prevent open start modal =============
const back = document.querySelector('.back-link');
back.addEventListener('click', () => localStorage.setItem('start', true));
