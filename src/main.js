import hash from 'hash-it';

//audio file
const sound = new Audio(
  'https://cdn.pixabay.com/audio/2023/10/04/audio_2905d35355.mp3'
);

// =============  TIMER  =====================

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const daysFild = document.querySelector('.field span[data-days]');
const hoursFild = document.querySelector('.field span[data-hours]');
const minutesFild = document.querySelector('.field span[data-minutes]');
const secondsFild = document.querySelector('.field span[data-seconds]');

function pad(num) {
  return String(num).padStart(2, '0');
}

function countdown(setDate) {
  const intervalID = setInterval(() => {
    const timeLeft = setDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeLeft);
    daysFild.textContent = pad(days);
    hoursFild.textContent = pad(hours);
    minutesFild.textContent = pad(minutes);
    secondsFild.textContent = pad(seconds);

    if (timeLeft < 1000) {
      clearInterval(intervalID);
    }
  }, 1000);
}

const newYear = new Date('2025-01-01T00:00:00');

const nextNewYear = newYear.setFullYear(new Date().getFullYear() + 1);

countdown(nextNewYear);

// =============  password-field   =====================
const eyeIcons = {
  open: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="eye-icon"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" /></svg>',
  closed:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="eye-icon"><path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" /><path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" /><path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" /></svg>',
};

function addListeners() {
  const toggleButton = document.querySelector('.toggle-button');

  if (!toggleButton) {
    return;
  }

  toggleButton.addEventListener('click', togglePassword);
}

function togglePassword() {
  const passwordField = document.querySelector('#password-field');
  const toggleButton = document.querySelector('.toggle-button');

  if (!passwordField || !toggleButton) {
    return;
  }

  toggleButton.classList.toggle('open');

  const isEyeOpen = toggleButton.classList.contains('open');

  toggleButton.innerHTML = isEyeOpen ? eyeIcons.closed : eyeIcons.open;
  passwordField.type = isEyeOpen ? 'text' : 'password';
}

document.addEventListener('DOMContentLoaded', addListeners);

// =============  Open modal form   =====================

const brainstorm = document.querySelector('.bs');
brainstorm.addEventListener('click', onClickBs);
function onClickBs(evt) {
  evt.preventDefault();

  const modalBackdrop = document.querySelector('.backdrop');
  modalBackdrop.classList.add('is-open');

  const passwordField = document.querySelector('#password-field');
  passwordField.setAttribute('value', localStorage.getItem('totalRes'));
}

// =============   Check password   ====================

const passwordField = document.querySelector('#password-field');
const form = document.querySelector('.modal-form');

form.addEventListener('submit', onSubmitPsw);

function onSubmitPsw(evt) {
  evt.preventDefault();
  //   console.log(passwordField.value);
  //   console.log(evt.target.elements.password.value);
  //   console.dir(form.elements.password.value);

  if (hash(passwordField.value) === 582581681554) {
    window.location.replace('./2-brainstorm.html');
  } else {
    alert('УПС, десь закралася прикра помилка :(');
    document.querySelector('.backdrop').classList.remove('is-open');
  }
}

/* ========== START MODAL WINDOW ============= */
const startModal = document.getElementById('start');

// const startPromise = new Promise((resolve, reject) => {
//   try {
//     sound.play();
//   } catch (error) {
//     reject(error);
//   }
//   resolve();
// });

// startPromise.catch(reason => {
//   startModal.classList.add('is-open');
// });

// =========== var 2
// try {
//   sound.play();
// } catch (error) {
//   console.log('rrr');

//   startModal.classList.add('is-open');
// }

if (localStorage.getItem('start')) {
  sound.play();
  localStorage.removeItem('start');
} else {
  startModal.classList.add('is-open');
}

startModal.addEventListener('click', evt => {
  startModal.classList.remove('is-open');
  sound.play();
});
