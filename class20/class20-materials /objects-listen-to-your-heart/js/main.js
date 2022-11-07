//Create a stopwatch object that has four properties and three methods
const stopwatch = {
    currentTime : 0,
    started : false,
    reset : false,
    counting : 0,

    resetter: function() {
        this.currentTime = 0
        this.started = false
        reset = true
    },

    counter: function() {
        this.counting++;
    },

    end: function() {
        this.currentTime = 0
        this.counting = 0
    }
}