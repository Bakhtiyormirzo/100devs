//Write your pseduo code first! 
// 0 -> 32

document.querySelector('#check').addEventListener('click', convert)

function convert() {
    // need the value that is in Celsius
    let temp = document.querySelector('#sel').value 
    // convert to Fahrenheit
    temp = temp * 9/5 + 32
    // show it 
    document.querySelector('#placeToSee').innerText = temp
    
}
