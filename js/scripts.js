class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  residents = [];

  addResident(resident) {
    if (resident instanceof Human) this.residents.push(resident);
    else console.log("Переданный аргумент не является человеком!");
  }
}

class House {
  constructor(maxNumOfApartments) {
    this.maxNumOfApartments = maxNumOfApartments;
  }

  apartments = [];

  addApartment(apartment) {
    if (apartment instanceof Apartment)
      this.apartments.length < this.maxNumOfApartments
        ? this.apartments.push(apartment)
        : console.log(`Невозможно добавить квартиру! Максимальное количество квартир в доме ${this.maxNumOfApartments}.`);
    else console.log("Переданный аргумент не является квартирой!");
  }
}

const john = new Human("John", "Male");
const jane = new Human("Jane", "Female");
const bob = new Human("Bob", "Male");
const alice = new Human("Alice", "Female");

const firstApartment = new Apartment();
const secondApartment = new Apartment();
firstApartment.addResident(john);
firstApartment.addResident(jane);
secondApartment.addResident(bob);
secondApartment.addResident(alice);

const myHouse = new House(2);
myHouse.addApartment(firstApartment);
myHouse.addApartment(secondApartment);

console.log(myHouse);
