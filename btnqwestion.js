const button = document.querySelector('button');
const form = document.querySelector('#blablabla');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupClose = document.querySelector('#popupClose');
const sendMessage = document.querySelector('#sendMessage');

button.addEventListener('click', () => {
  form.classList.add('open');
  popup.classList.add('popup_open');
});




popup.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(popupContainer);
 
	if ( ! withinBoundaries ) {
		popup.style.display = 'none'; // скрываем элемент т к клик был за его пределами
    location. reload();
	}
  
});

popupClose.addEventListener( 'click', function() {
	
		popup.style.display = 'none'; 
    location. reload();

});

sendMessage.addEventListener( 'click', function() {
	
  location. reload();

});





