function extend(target) {
    if (!arguments[1]) {
        return;
    }

    for (var ii = 1, ll = arguments.length; ii < ll; ii++) {
        var source = arguments[ii];

        for (var prop in source) {
            if (!target[prop] && source.hasOwnProperty(prop)) {
                target[prop] = source[prop];
            }
        }
    }
}

function Person(name) {
    this.name = name;
}

function Dog(name) {
    this.name = name;
}

var speaker = {
    speak: function () {
        return this.name + " is speaking.";
    }
};

var mover = {
    walk: function () {
        return this.name + " is walking.";
    },
    run: function () {
        return this.name + " is running.";
    }
};

var arithmetic = {
    add: function () {
        return this.name + " is adding numbers together.";
    },
    multiply: function () {
        return this.name + " is multiplying numbers together.";
    }
};

//$.extend(Person.prototype, speaker, mover, arithmetic);
//$.extend(Dog.prototype, speaker, mover);

extend(Person.prototype, speaker, mover, arithmetic);
extend(Dog.prototype, speaker, mover);


var john = new Person("John Doe");
var fido = new Dog("Fido");