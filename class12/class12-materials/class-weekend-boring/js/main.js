document.querySelector('#check').addEventListener('click', check)

function check() {

  let day = document.querySelector('#day').value

  day = day.toLowerCase()

  //Conditionals go here
  if (day === "saturday" || day === "sunday"){
    //It is the weekend
    document.querySelector('#placeToSee').innerText = "Weekend"
  } else if (day === "tuesday" || day === "thursday") {
    // Class day
    document.querySelector('#placeToSee').innerText = "Class Day"
  } else {
    // Boring day
    document.querySelector('#placeToSee').innerText = "Boring Day"
  }
}
