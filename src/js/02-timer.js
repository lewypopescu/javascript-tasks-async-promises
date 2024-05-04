import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log('Value:', selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

const inputValue = document.querySelector('#datetime-picker');
const startB = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

startB.disabled = true;

function inputChecked() {
  inputValue.addEventListener('change', () => {
    const minData = new Date();
    const selectedData = new Date(inputValue.value);
    if (selectedData >= minData) {
      startB.disabled = false;
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  });
}

inputChecked();

const startBAction = () => {
  startB.disabled = true;

  const timerId = setInterval(() => {
    const targetDate = new Date(inputValue.value);
    const currentDate = new Date();

    const timeToCount = targetDate.getTime() - currentDate.getTime();

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(timeToCount / day);
    const hours = Math.floor((timeToCount % day) / hour);
    const minutes = Math.floor(((timeToCount % day) % hour) / minute);
    const seconds = Math.floor(
      (((timeToCount % day) % hour) % minute) / second
    );

    const zeroF = value => value.toString().padStart(2, '0');

    dataDays.textContent = zeroF(days);
    dataHours.textContent = zeroF(hours);
    dataMinutes.textContent = zeroF(minutes);
    dataSeconds.textContent = zeroF(seconds);

    if (timeToCount < 1000) {
      clearInterval(timerId);
    }
  }, 1000);
};

startB.addEventListener('click', startBAction);
