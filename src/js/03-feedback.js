import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
let feedbackData =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};

const fillFeedbackFormFields = () => {
  try {
    const feedbackInfoFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (feedbackInfoFromLS) {
      for (const prop in feedbackInfoFromLS) {
        formEl.elements[prop].value = feedbackInfoFromLS[prop];
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const onFeedbackFormItemChange = event => {
  const { target } = event;
  const name = target.name;
  const value = target.value;

  feedbackData[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  if (!event.target.email.value || !event.target.message.value) {
    alert('All fields must be filled!');
    return;
  }
  console.log(feedbackData);

  formEl.reset();
  localStorage.removeItem('feedback-form-state');
  feedbackData = {};
};

fillFeedbackFormFields();
formEl.addEventListener('input', throttle(onFeedbackFormItemChange, 500));
formEl.addEventListener('submit', onFeedbackFormSubmit);
