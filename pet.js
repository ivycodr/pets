class Pet {
    
    static pets = [];
    constructor(name, species, color) {
        this.name = name;
        this.species = species;
        this.color = color;
    }

    static addToArray(pet) {
        Pet.pets.push(pet);
    }
    
    changeName(name) {
        this.name = name;
    }

}

module.exports = Pet;


