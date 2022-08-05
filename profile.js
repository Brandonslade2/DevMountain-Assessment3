function handleClickColor(evt) {
	evt.preventDefault();
	alert('My Favorite color is Blue')
}

function handleClickPlace(evt) {
	evt.preventDefault();
	alert('My Favorite place is my house')
}

function handleClickRitual(evt) {
	evt.preventDefault();
	alert('My Favorite ritual is gaming')
}
 




let MyFavoriteColor = document.querySelector('#color');
MyFavoriteColor.addEventListener('click', handleClickColor)

let MyFavoritePlace = document.querySelector('#place');
MyFavoritePlace.addEventListener('click', handleClickPlace)

let MyFavoriteRitual = document.querySelector('#ritual');
MyFavoriteRitual.addEventListener('click', handleClickRitual)


//Queue: paramaters in the function called to minimize redundancy not possible?
//Queue: What is evt referencing? related to question above?