//Напиши всі можливі варіанти створення функцій.
function functionName1(parameter1, parameter2) {
  // тіло функції
}
const functionName2 = function (parameter1, parameter2) {
  // тіло функції
};
const functionName3 = (parameter1, parameter2) => {
  // тіло функції
};

//Створи функцію, яка буде виводити кількість переданих їй аргументів.
function constNumberArguments(a, b, c) {
  console.log(arguments);
  return arguments.length;
}

constNumberArguments();

//Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.
function compareNumbers() {
  const a = prompt('Введіть перше число');
  const b = prompt('Введіть друге число');

  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

console.log(compareNumbers());

// //Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const n = prompt("Введіть число:");
const result = factorial(n);
console.log(`Факторіал числа ${n} дорівнює ${result}.`);

//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
//Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function mergeDigits() {
  const digit1 = prompt("Введіть першу цифру:");
  const digit2 = prompt("Введіть другу цифру:");
  const digit3 = prompt("Введіть третю цифру:");

  const merge = digit1 + digit2 + digit3;
  return Number(merge);
}

console.log(mergeDigits());

//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
//Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function calculateArea() {
  let figureHeight = Number(prompt("Введіть висоту фігури"));
  let figureWidth = Number(prompt("Введіть ширину фігури"));

  if (isNaN(figureWidth) || figureWidth <= 0) {
    figureWidth = figureHeight;
  }

  return figureHeight * figureWidth;
}

console.log("Площа фігури:", calculateArea());

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function isPerfect(n) {
  let sum = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      if (i * i != n) {
        sum = sum + i + n / i;
      } else {
        sum = sum + i;
      }
    }
  }

  if (sum == n && n != 1) {
    return true;
  }
  return false;
}

function checkIsPerfect() {
  const passedNumber = Number(prompt("Введіть число")); 

  if (isNaN(passedNumber) || passedNumber <= 0){
    console.log('Введено неправильне значення.');
    return;
  }
  const isNumberPerfect = isPerfect(passedNumber);
  if (isNumberPerfect) {
    console.log("Число досконале.");
  } else {
    console.log("Число не досконале.");
  }
}

checkIsPerfect();

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію,
// щоб дізнатися, чи є це число досконалим.
function rangeValue() {
  const minValue = Number(prompt('Введіть мінімальне значення діапазону:'));
  const maxValue = Number(prompt('Введіть максимальне значення діапазону:'));

  if (minValue >= maxValue) {
    console.log('Некоректні дані.');
    return;
  }

  console.log(`Досконалі числа з діапазону ${minValue} - ${maxValue}:`);

  for (let i = minValue; i <= maxValue; i++){
    if (isPerfect(i)) {
      console.log(i);
    }
  }
}

rangeValue();