//Create a mouse object that has four properties and three methods
const Mouse = {}
Mouse.color = 'black'
Mouse.brand = 'Logitec'
Mouse.model = 'MX Ergo'
Mouse.wireless = true 

Mouse.leftClick = function() {
    console.log('Left Click')
}
Mouse.rightClick = function() {
    console.log('Right Click')
}
Mouse.scroll = function() {
    console.log('Jump Jump Jump')
}