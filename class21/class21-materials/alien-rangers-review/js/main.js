//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let movieShows = ['Game of Thrones', 'Breaking Bad', 'Suits']
// console.log(movieShows)

//Create an array of numbers
let nums = [12,13,13,12,34,56,43,2,34]
//Return a new array of numbers that includes every even number from the previous Arrays
function evenOnly(arr) {
    let ret = []
    arr.forEach(n => {
        if (n % 2 === 0) {
            ret.push(n)
        }
    });
    return ret
}
// console.log(evenOnly(nums))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function strangeSum(arr) {
    arr.sort(function(a, b){return a - b});
    alert(arr[1] + arr[arr.length - 2])
}
strangeSum(nums)
