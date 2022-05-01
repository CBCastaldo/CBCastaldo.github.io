// Initialize elements and variables
const currentDateAndTime = new Date();
const copyrightyear = document.querySelector('#copyrightyear');
const thedate = document.querySelector('p');
const thetotal = document.querySelector('#total');

copyrightyear.textContent = currentDateAndTime.getFullYear();
//console.log("It is now "+currentDateAndTime);
thedate.innerHTML = `It is now <strong>${currentDateAndTime}</strong>!`;

let theTotal = total(1,2,3,4,5,6,7,8,9,10)
// console.log("The total is "+theTotal)
thetotal.textContent = `The total is ${theTotal}.`;

function total(...theNumbers){
	// console.log(theNumbers);
	let sum = 0
	// use in to use the index numbers. use of to use the list of numbers.
	for(let aNumber of theNumbers){
		sum += aNumber//Want to know why aNumber is multiplied by 1? Remove it and find out. :)
	}
	return sum
}
