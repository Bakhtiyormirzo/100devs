document.querySelector('#check').addEventListener('click', check)

function check() {

  let day = document.querySelector('#day').value 

  day = day.toLowerCase() 

  if (day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').innerText = 'CLASS DAY'
  } else if (day === 'saturday' || day === 'sunday') {
    document.querySelector('#placeToSee').innerText = 'WEEKEND'
  } else {
    document.querySelector('#placeToSee').innerText = 'BORIING'
  }
}

