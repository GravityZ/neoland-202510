//Object 

//var o = {} //literal object
var o = new Object()

// Array

//var a = [] // literal array
var a = new Array()

//var a1 = [10,30,40,60]

var a1 = new Array(10,30,40,60)


// Person

var Person = function(name, dateOfBirth) {
    this.name = name
    this.dateOfBirth = dateOfBirth
}

var peter = new Person('Peter Pan', '1990-01-01')

console.log(peter)