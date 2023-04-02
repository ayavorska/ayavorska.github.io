// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
let userName = prompt("Please enter your name:");
alert("Hello " + userName);

// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
let yearOfBirth = prompt("Enter your year of birth:");
const CURRENT_YEAR = 2023;
let userAge = CURRENT_YEAR - yearOfBirth;
alert("Your age is: " + userAge);

// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата.
let sideLength = prompt("Enter square side:");
let squarePerimeter = sideLength * 4;
alert("Perimeter of square is: " + squarePerimeter);

// Запитай у користувача радіус кола і виведи площу такої окружності.
let circleRadius = prompt("Enter radius of a circle:");
let circleArea = Math.PI * circleRadius ** 2;
alert("Area of circle is: " + circleArea);

// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися.
// Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
let distance = prompt("Enter distance in kilometers between two cities:");
let arrivalTime = prompt("Enter arrival time:");
let speed = distance / arrivalTime;
alert("Speed at which you need to move to be on time is: " + speed);

// Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. 
// Курс валют зберігається в константі.
const UAH_TO_USD = 38;
let amount = prompt("Enter amount in USD:");
let resultInUah = amount * UAH_TO_USD;
alert("Converted value is: " + resultInUah + "UAH");
