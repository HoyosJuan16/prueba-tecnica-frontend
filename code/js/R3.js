const buttonImage = document.querySelector('.post-image-play');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');

buttonImage.addEventListener( 'click' , e => {
  e.preventDefault();
  modal.style.display = 'flex';
  modal.style.opacity = 1;
})

btnClose.addEventListener( 'click' , e => {
  e.preventDefault();
  modal.style.opacity = 0;
  modal.style.display = 'none';
})