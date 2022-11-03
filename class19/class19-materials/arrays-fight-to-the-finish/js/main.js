//Create an array of movie titles. Loop through the array and each element to the h2.
let movieTitles = ["In It To Win It", "Fight to the Finish", "Worldwide Cheersmack"]
for (let i = 0; i < movieTitles.length; i++) {
    document.querySelector('h2').innerText += movieTitles[i]
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [1,2,3,4,5,6,7,8]
nums.forEach((e, i) => {
    nums[i] = e + 3
})

//Find the average of all the numbers from question three
let sum = 0

for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
}

console.log(sum / nums.length)