import throttle from 'lodash.throttle';

let formData = { email: '', message: '' };

const formRefs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input[name="email"]'),
  msg: document.querySelector('.feedback-form textarea'),
};

const { form, email, msg } = formRefs;

// console.log(form, email, msg);

if (localStorage.getItem('feedback-form-state')) {
  if (JSON.parse(localStorage.getItem('feedback-form-state'))['email']) {
    email.value = JSON.parse(localStorage.getItem('feedback-form-state'))[
      'email'
    ];
    formData['email'] = email.value;
  }

  if (JSON.parse(localStorage.getItem('feedback-form-state'))['message']) {
    msg.value = JSON.parse(localStorage.getItem('feedback-form-state'))[
      'message'
    ];
    formData['message'] = msg.value;
  }
}

form.addEventListener('input', throttle(onInput, 300));
form.addEventListener('submit', onSubmit);

function onInput(evt) {
  if (evt.target.name === 'email') {
    formData['email'] = evt.target.value.trim();
  } else if (evt.target.name === 'message') {
    formData['message'] = evt.target.value.trim();
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();
  if (!(email.value && msg.value)) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
  formData = { email: '', message: '' };
}
