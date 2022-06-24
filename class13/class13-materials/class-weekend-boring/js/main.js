//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    document.querySelector('#placeToSee').innerText = "YOU HAVE CLASS"
  }else if( day === "saturday" || day === "sunday"){
    document.querySelector('#placeToSee').innerText = "It's The Weekend"
  }else{
    document.querySelector('#placeToSee').innerText = "BORING"
  }

}

// REWRITTEN ALL THE JAVASCRIPT CODE

// document.querySelector('#check').addEventListener('click', run) 

// function run() {
//   const day = document.querySelector("#day").value.toLowerCase()

//   if (day === "tuesday" || day === "thursday") {
//     document.querySelector("#placeToSee").innerText = "YOU HAVE A CLASS"
//   } else if (day === 'saturday' || day === 'sunday') {
//     document.querySelector("#placeToSee").innerText = "IT'S WEEKEND"
//   } else {
//     document.querySelector("#placeToSee").innerText = "BORIIING"
//   }
// }
