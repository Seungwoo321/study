function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayName = function () {
    return "My name is " + this.firstName + " " + this.lastName;
};


var johnDoe = new Person("John", "Doe");
var janeDoe = new Person("Jane", "Doe");

var isPerson = johnDoe instanceof Person; // true
var isSame = johnDoe.sayName === janeDoe.sayName; // true
