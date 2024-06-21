const slider = document.querySelector('.filter__slider');
const minValue = document.querySelector('.filter__slider-input--min');
const maxValue = document.querySelector('.filter__slider-input--max');

minValue.value = 0;
maxValue.value = 900;

noUiSlider.create(slider, {
  start: [0, 900],
  connect: true,
  range: {
      'min': 0,
      'max': 1000
  },
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

slider.noUiSlider.on('update', () => {
  minValue.value = slider.noUiSlider.get()[0];
  maxValue.value = slider.noUiSlider.get()[1];
});

minValue.addEventListener('input', (evt) => {
  const res = evt.target.value;
  slider.noUiSlider.set([res, ]);
});

maxValue.addEventListener('input', (evt) => {
  const res = evt.target.value;
  slider.noUiSlider.set([ , res]);
});
