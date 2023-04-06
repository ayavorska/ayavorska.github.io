// //Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17),
// //дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const userAge = prompt("Введи свій вік:");
if (userAge >= 0 && userAge <= 11) {
  console.log("Task1: ", "Ви - дитина.");
} else if (userAge >= 12 && userAge <= 17) {
  console.log("Task1: ", "Ви - підліток.");
} else if (userAge >= 18 && userAge <= 59) {
  console.log("Task1: ", "Ви - дорослий.");
} else if (userAge >= 60 && userAge <= 150) {
  console.log("Task1: ", "Ви - пенсіонер.");
} else {
  console.log("Task1: ", "Невірні дані.");
}

// //Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
// //який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
const userNumber = prompt("Введи число від 0 до 9:");
switch (userNumber) {
  case "0":
    console.log("Task2: ", ")");
    break;
  case "1":
    console.log("Task2: ", "!");
    break;
  case "2":
    console.log("Task2: ", "@");
    break;
  case "3":
    console.log("Task2: ", "#");
    break;
  case "4":
    console.log("Task2: ", "$");
    break;
  case "5":
    console.log("Task2: ", "%");
    break;
  case "6":
    console.log("Task2: ", "^");
    break;
  case "7":
    console.log("Task2: ", "&");
    break;
  case "8":
    console.log("Task2: ", "*");
    break;
  case "9":
    console.log("Task2: ", "(");
    break;
  default:
    console.log("Task2: ", "none");
}

//Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const minNumber = Number(prompt("Введи початкове число:"));
const maxNumber = Number(prompt("Введи кінцеве число:"));
let sumMinMAx = 0;

for (let i = minNumber; i <= maxNumber; i++) {
  sumMinMAx += i;
}

console.log("Task3: ", "Сума чисел в заданому діапазоні: " + sumMinMAx);

//Запитай у користувача 2 числа і знайди найбільший спільний дільник.
const askNumber1 = prompt("Введіть перше число:");
const askNumber2 = prompt("Введіть друге число:");
let greatestCommonDivisor;

for (let i = 1; i <= askNumber1 && i <= askNumber2; i++) {
  if (askNumber1 % i === 0 && askNumber2 % i === 0) {
    greatestCommonDivisor = i;
  }
}

console.log(
  "Task4: ",
  `Найбільший спільний дільник для ${askNumber1} та ${askNumber2} дорівнює ${greatestCommonDivisor}`
);

//Запитай у користувача число і виведи всі дільники цього числа.
const askUserNumber = prompt("Введіть число:");

for (let i = 1; i <= askUserNumber; i++) {
  if (askUserNumber % i === 0) {
    console.log("Task5: ", i);
  }
}

//Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
const fiveDigitNumber = prompt("Введіть п’ятирозрядне число:");

if (fiveDigitNumber.length !== 5) {
  console.log("Task6: ", "Введене число не є п’ятирозрядне.");
} else if (
  fiveDigitNumber[0] === fiveDigitNumber[4] &&
  fiveDigitNumber[1] === fiveDigitNumber[3]
) {
  console.log("Task6: ", "Це число є паліндромом");
} else {
  console.log("Task6: ", "Це число не є паліндромом");
}

//Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.
const purchaseAmount = parseFloat(prompt("Введіть суму покупки:"));
let discountRate;

if (purchaseAmount >= 200 && purchaseAmount < 300) {
  discountRate = 0.03;
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
  discountRate = 0.05;
} else if (purchaseAmount >= 500) {
  discountRate = 0.07;
}

let discountAmount = purchaseAmount * discountRate;
let totalAmount = (purchaseAmount + discountAmount).toFixed(2);

console.log("Task7: ", `Сума до сплати зі знижкою: ${totalAmount} грн.`);

//Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
//При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран.
//Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
const tenUserNumbers = prompt("Введіть 10 чисел:");
let numbersList = tenUserNumbers.split(" ");

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numbersList.length; i++) {
  let currentNumber = numbersList[i];
  if (currentNumber < 0) {
    negativeCount += 1;
  } else if (currentNumber > 0) {
    positiveCount += 1;
  } else {
    zeroCount += 1;
  }

  if (currentNumber % 2 === 0) {
    evenCount += 1;
  } else {
    oddCount += 1;
  }
}

console.log("Task8: ", "Кількість додатніх чисел: ", positiveCount);
console.log("Task8: ", "Кількість від`ємних чисел: ", negativeCount);
console.log("Task8: ", "Кількість нулів: ", zeroCount);
console.log("Task8: ", "Кількість парних чисел: ", evenCount);
console.log("Task8: ", "Кількість непарних чисел: ", oddCount);

//Зацикли відображення днів тижня таким чином: «День тижня.
//Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
const daysOfWeek = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
  "Неділя",
];
let currentDay = 0;

while (true) {
  let followMessage =
    daysOfWeek[currentDay] + ". Хочеш побачити наступний день?";
  let userConfirm = confirm(followMessage);
  if (userConfirm) {
    currentDay = currentDay === daysOfWeek.length - 1 ? 0 : currentDay + 1;
  } else {
    break;
  }
}

//Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його
//наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N
//і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач,
//зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач
//вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач
//не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
let minGuessNumber = 0;
let maxGuessNumber = 100;
let guessNumber;

while (true) {
  guessNumber = Math.floor((minGuessNumber + maxGuessNumber) / 2);
  let answer = prompt(
    `Ваше число > ${guessNumber}, < ${guessNumber} або == ${guessNumber}?`
  );

  if (answer === ">") {
    minGuessNumber = guessNumber + 1;
  } else if (answer === "<") {
    maxGuessNumber = guessNumber - 1;
  } else if (answer === "==") {
    alert(`Я відгадав ваше число! Воно дорівнює ${guessNumber}.`);
    break;
  } else {
    alert("Будь ласка, введіть >, < або ==.");
  }
}

//Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити
//на числа від 1 до 10.
for (let i = 2; i <= 9; i++) {
  console.log("Task11: ", `Таблиця множення для числа ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("\n");
}
