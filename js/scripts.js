class DataValidator {
  static isTrueNumber(value) {
    return typeof value === "number" && !isNaN(value) && isFinite(value) && Number.isInteger(value);
  }

  static isTrueYear(value) {
    return value >= 1990 && value <= new Date().getFullYear();
  }

  static isTrueArray(value) {
    return value instanceof Array;
  }

  static isTrueString(value) {
    return typeof value === "string" && value.trim() !== "";
  }
}

class Student {
  constructor(name, surname, yearOfBirth, points) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.points = points;
    this.attendance = [];
  }

  get fullName() {
    return DataValidator.isTrueString(this.name) && DataValidator.isTrueString(this.surname)
      ? this.name + " " + this.surname
      : "--нет данных--";
  }

  get age() {
    if (DataValidator.isTrueNumber(this.yearOfBirth) && DataValidator.isTrueYear(this.yearOfBirth)) {
      const currentDate = new Date();
      const birthDate = new Date(this.yearOfBirth, 0, 1);
      const ageInMilliseconds = currentDate - birthDate;
      const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

      return ageInYears;
    }

    return "--нет данных--";
  }

  get averageScore() {
    if (DataValidator.isTrueArray(this.points)) {
      const averageScore =
        this.points.reduce((sum, point) => {
          const isTruePoint = point >= 1 && point <= 100;

          if (DataValidator.isTrueNumber(point) && isTruePoint) return (sum += point);
        }, 0) / this.points.length;

      return Math.round(averageScore);
    }

    return "--нет данных--";
  }

  fillAttendance() {
    if (DataValidator.isTrueArray(this.attendance)) {
      while (this.attendance.length < 25) {
        const visit = Math.round(Math.random());

        visit ? this.present() : this.absent();
      }
    }
  }

  present() {
    if (this.attendance.length < 25) {
      this.attendance.push(true);
    }
  }

  absent() {
    if (this.attendance.length < 25) {
      this.attendance.push(false);
    }
  }

  get summary() {
    if (DataValidator.isTrueArray(this.attendance)) {
      const averageAttendance = this.attendance.filter((attendance) => attendance === true).length / this.attendance.length;

      let resultString = "";

      switch (true) {
        case this.averageScore >= 90 && averageAttendance >= 0.9:
          resultString += "Молодец!";
          break;
        case (this.averageScore < 90 && averageAttendance >= 0.9) || (this.averageScore >= 90 && averageAttendance < 0.9):
          resultString += "Хорошо, но можно лучше!";
          break;
        default:
          resultString += "Редиска!";
      }

      return resultString;
    }

    return "--нет данных--";
  }

  get consoleFullInfo() {
    console.log(`Студент: ${this.fullName}.
 Возраст: ${this.age}.
 Средний балл: ${this.averageScore}.
 Итоговая оценка успеваемости: ${this.summary}.`);
  }
}

const anton = new Student("Anton", "Sharenko", 2002, [60, 80, 75, 43, 54, 87, 66, 90]);
anton.fillAttendance();
anton.consoleFullInfo;

const igor = new Student("Igor", "Brom", 1993, [90, 80, 99, 85, 93, 82, 95, 100]);
igor.fillAttendance();
igor.consoleFullInfo;

const anna = new Student("Anna", "Keysi", 1995, [100, 100, 100, 100, 100, 100, 100, 100]);
anna.fillAttendance();
anna.consoleFullInfo;
