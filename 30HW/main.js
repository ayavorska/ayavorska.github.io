//Створити склад з методами додавання на склад, пошуку по складу товара
//і розрахунку ваги
const sklad = {
  goods: [],
  findGoodById: function (id) {
    return this.goods.find((good) => good.id === id);
  },
  addGood: function (good) {
    if (good.id && good.weight && good.weight.kg) {
      this.goods.push(good);
    } else {
      console.log("Товару не знайдено.");
    }
  },
  getWeightKg: function () {
    let allWeight = 0;
    this.goods.forEach((good) => {
      if (good.weight && good.weight.kg) {
        allWeight += good.weight.kg;
      }
    });
    return allWeight;
  },
};

const door = {
  id: 1,
  weight: {
    kg: 100,
  },
  brand: "Ikea",
};

const table = {
  id: 2,
  weight: {
    kg: 10,
  },
};

const paper = {
  id: 3,
  color: "red",
};

sklad.addGood(door);
sklad.addGood(table);
sklad.addGood(paper);

console.log("Пошук товару по id:", sklad.findGoodById(1));
console.log(`Загальна сума ваги усіх товарів: ${sklad.getWeightKg()}.`);

console.log("---------------------------");

//Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку,
//середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
//1.Метод, який виводить на екран інформацію про автомобіль.
//2.Додавання ім’я водія у список
//3.Перевірка водія на наявність його ім’я у списку
//4.Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
//Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
const car = {
  manufacturer: "Audi",
  model: "A4",
  yearOfManufacture: 2004,
  averageSpeed: 120,
  fuelTankCapacity: 60,
  fuelConsumption: 7,
  drivers: ["Alina"],

  showInfo: function () {
    console.log(`Manufacturer: ${this.manufacturer}`);
    console.log(`Model: ${this.model}`);
    console.log(`YearOfManufacture: ${this.yearOfManufacture}`);
    console.log(`AverageSpeed: ${this.averageSpeed}`);
    console.log(`FuelTankCapacity: ${this.fuelTankCapacity}`);
    console.log(`FuelConsumption: ${this.fuelConsumption}`);
    console.log(`Drivers: ${this.drivers}`);
  },

  addDriver: function (driverName) {
    this.drivers.push(driverName);
  },

  checkDriver: function (driverName) {
    const isDriver = this.drivers.includes(driverName);
    console.log(isDriver ? "Водій є в списку." : "Водія немає в списку.");
  },

  tripTime: function (distance) {
    let time = distance / this.averageSpeed;
    const fuel = (distance / 100) * this.fuelConsumption;
    const breakStops = time / 4;
    time += breakStops;
    console.log(`Часу потрібно: ${time.toFixed(2)} годин.`);
    console.log(`Палива потрібно: ${fuel.toFixed(2)} літрів.`);
  },
};

car.addDriver(" Slavik");
car.showInfo();
car.checkDriver("Vlad");
car.tripTime(200);

console.log("---------------------------");

//Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
//1.Для виведення часу на екран.
//2.Зміни часу на передану кількість секунд.
//3.Зміни часу на передану кількість хвилин.
//4.Зміни часу на передану кількість годин.
//5.Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша.
//Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75».
//Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  displayTime: function() {
    const hours = this.hours < 10 ? "0" + this.hours : this.hours;
    const minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    const seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
    console.log(`${hours}:${minutes}:${seconds}`);
  },

  addSeconds: function(seconds) {
	this.seconds += seconds;
	this.minutes += Math.floor(this.seconds / 60);
	this.seconds %= 60;
	this.hours += Math.floor(this.minutes / 60);
	this.minutes %= 60;
	this.hours %= 24;
  },
  
  addMinutes: function(minutes) {
	this.minutes += minutes;
	this.hours += Math.floor(this.minutes / 60);
	this.minutes %= 60;
	this.hours %= 24;
  },

  addHours: function(hours) {
	this.hours += hours;
	this.hours %= 24;
  },
};

time.hours = 14;
time.minutes = 20;
time.seconds = 45;
time.displayTime();
time.addSeconds(90);
time.displayTime();
time.addMinutes(30);
time.displayTime();
time.addHours(9);
time.displayTime();

console.log("---------------------------");

//Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
//1.Складання 2-х об'єктів-дробів.
//2.Віднімання 2-х об'єктів-дробів.
//3.Множення 2-х об'єктів-дробів.
//4.Ділення 2-х об'єктів-дробів.
//5.Скорочення об'єкта-дробу.
