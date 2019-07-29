const imageSF = document.querySelectorAll('.trip-image');
const backDrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

imageSF.forEach(image => {
  image.addEventListener('click', openModal);
});

backDrop.addEventListener('click', closeModal);

function openModal() {
  backDrop.style.display = 'block';
  modal.style.display = 'block';
}

function closeModal() {
  backDrop.style.display = 'none';
  modal.style.display = 'none';
}
