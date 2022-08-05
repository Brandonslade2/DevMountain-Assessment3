console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);






function handleCompliment(evt) {
	evt.preventDefault();
	
	alert('You are special.');
}


let givecompliment = document.querySelector('#thepic');

givecompliment.addEventListener('mouseover', handleCompliment);