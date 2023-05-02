// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

class Circle {
  constructor(radius) {
    if (radius < 0) {
      throw new Error("Радіус не може бути від'ємним");
    }
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value < 0) {
      throw new Error("Радіус не може бути від'ємним");
    }
    this._radius = value;
  }

  get diameter() {
    return 2 * this._radius;
  }

  area() {
    return Math.PI * this._radius ** 2;
  }

  circumference() {
    return 2 * Math.PI * this._radius;
  }
}

const circle = new Circle(8);

console.log("Task 1:");
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area());
console.log(circle.circumference());
console.log("-----------------------------------------");

// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти,
// доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).

// Продемонструй роботу написаних методів.

class Marker {
  constructor(color) {
    this._color = color;
    this._inkLevel = 100;
  }

  writeText(text) {
    const inkAmountPerCharacter = 0.5;

    const characters = text.split("");
    let resultIndex;

    characters.forEach((char, index) => {
      if (char !== " " && this._inkLevel > 0) {
        this._inkLevel = this._inkLevel - inkAmountPerCharacter;
      }
      if (this._inkLevel === 0) {
        resultIndex = index;
      }
    });
    const resultString = characters.slice(0, resultIndex).join("");
    console.log(`%c ${resultString}`, `color: ${this._color}`);
  }
}

console.log("Task 2:");
const marker = new Marker("green");
marker.writeText(
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur soluta, mollitia quam perspiciatis tempore, consequatur error natus rerum iusto iure debitis labore. Porro saepe esse, qui fugit quas excepturi rem eveniet ratione? Voluptates dolores veritatis aut possimus alias quis ad cupiditate id facere dignissimos, asperiores eaque unde quas, aperiam laboriosam corrupti consequatur a in sequi nesciunt hic quibusdam. Natus!"
);
console.log("-----------------------------------------");

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку.
// Масив працівників необхідно передавати через конструктор,
// а отримувати HTML-код за допомогою методу getHtml ().
// Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().

class Employees {
  constructor(firstName, lastName, position, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._position = position;
    this._salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this._employees = employees;
  }

  getHtml() {
    let table = "<table>";
    table +=
      "<thead><tr><th>First name:</th><th>Last name:</th><th>Position:</th><th>Salary:</th></tr></thead>";
    table += "<tbody>";
    this._employees.forEach((employee) => {
      table += `<tr><td>${employee._firstName}</td><td>${employee._lastName}</td><td>${employee._position}</td><td>${employee._salary}</td></tr>`;
    });
    table += "</tbody></table>";
    return table;
  }
}

const employees = [
  new Employees("Ivan", "Pylypiv", "Manager", 100000),
  new Employees("Dmytro", "Ivachiv", "HR", 100000),
  new Employees("Mykyta", "Soloma", "Front-End Developer", 100000),
  new Employees("Yulia", "Knysh", "Designer", 100000),
];

const empTable = new EmpTable(employees);

const tableContainerEl = document.getElementById("tableContainer");
tableContainerEl.innerHTML = empTable.getHtml();
