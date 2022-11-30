//Create a constructor with 4 properties and 3 methods

function MakePizza(size, toppings, crust, sause) {
    this.size = size
    this.toppings = toppings
    this.crust = crust
    this.sause = sause

    this.estimatedTimeDelivery = function() {
        console.log('Calculating ...')
    }

    this.burnMouth = function() {
        console.log('VVjbbqbxwuxqwx')
    }
    
    this.frisbee = function() {
        console.log('Yeeeeet')
    }
}

let pizza = new MakePizza('large', ['spinage', 'garlic'], 'deep fish', 'white')