'use strict';

const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Modal opening
const openModal = function () {
  console.log('working');
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//Modal closing
const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal);

//Modal closing by Esc

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
