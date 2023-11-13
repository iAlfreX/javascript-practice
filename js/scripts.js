class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Владелец: ${this.name}, ${this.age}.`);
  }
}

class Car {
  constructor(brand, model, year, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    this._owner = null;
    this._minimumAge = 18;
  }

  get owner() {
    return this._owner;
  }

  set owner(owner) {
    if (owner instanceof Human)
      owner.age >= this._minimumAge
        ? (this._owner = owner)
        : console.log(`Владелец ${owner.name} не может быть назначен: возраст менее 18 лет.`);
    else console.log("Переданный аргумент не является объектом класа Human!");
  }

  displayFullInfo() {
    this.owner.displayInfo();

    console.log(`Информация об автомобиле:
	- марка: ${this.brand};
	- модель: ${this.model};
	- год выпуска: ${this.year};
	- номерной знак: ${this.licensePlate}.`);
  }
}

const anton = new Human("Антон", 21);
const john = new Human("Джон", 43);

const toyota = new Car("Toyota", "Camry", 2022, "ABC123");
const honda = new Car("Honda", "Accord", 2021, "XYZ789");

toyota.owner = anton;
honda.owner = john;

toyota.displayFullInfo();
honda.displayFullInfo();
