function handleClickRandom(evt) {
	evt.preventDefault();
	var arrStr = ['Marcos Pizza', 'Filibertos', 'Red Robin', 'QuikTrip']  //Queue: How to grab a text from the list on my webpage and append it to this array? Instead of typing it.
	var randElement = arrStr[Math.floor(Math.random() * arrStr.length)];
	alert(`The random restauraunt chosen for you is ${randElement}`)
}

let random = document.querySelector('#random');
random.addEventListener('click', handleClickRandom)