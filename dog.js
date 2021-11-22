const Pet = require('./pet');

class Dog extends Pet {
    constructor(name, color, breed) {
        super(name, "Dog", color);
        this.breed = breed;

    }

    bark(sound) {
        return `this do goes ${sound}`;
    }

}

module.exports = Dog;
let d1 = new Dog('Toby', 'Black', 'Lab');
let d2 = new Pet ('Boris', 'Brown', 'Dog');

//console.log(d1);

