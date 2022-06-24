const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}

// REWROTE ALL THE JAVASCRIPT

// const contestants = document.querySelectorAll('.contestant')

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click) {
// 	if (click.target.classList.contains('rose')) {
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	} else {
// 		alert('Wrong!')
// 	}
// }
