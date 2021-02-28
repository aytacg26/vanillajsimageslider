const slider = document.querySelector('.slider');
const before = document.querySelector('.img-container-before');
const after = document.querySelector('.img-container-after');
const container = document.querySelector('.container');

const drag = (e) => {
  const xPosition = e.layerX;
  let size = container.offsetWidth;
  before.style.width = xPosition + 'px';
  slider.style.left = xPosition + 'px';

  if (xPosition < 40) {
    before.style.width = 0;
    slider.style.left = 0;
  }

  if (xPosition + 40 > size) {
    before.style.width = size + 'px';
    slider.style.left = size + 'px';
  }
};

container.addEventListener('mousemove', drag);
