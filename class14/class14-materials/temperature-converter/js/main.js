//Write your pseduo code first! 


document.querySelector('#check').addEventListener('click', convert)

function convert() {
    
    // get the celsius value
    let temp = document.querySelector('#temp').value 

    // convert to farenheight 
    temp = temp * 9/5 + 32

    // show it
    document.querySelector('#placeToSee').innerText = temp
}

