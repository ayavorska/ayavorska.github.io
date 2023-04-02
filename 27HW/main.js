// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let result = 0.1 + 0.2;
console.log("Task1: ", result.toFixed(1));

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних),
// добийся математично правильної відповіді.
let number1 = "1";
let number2 = 2;
let result2 = Number(number1) + number2;
console.log("Task2: ", result2);

// Користувач вказує обсяг флешки в Гб.
// Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
let sizeInGb = prompt("Enter size of flesh drive in GB:");
let sizeInMb = sizeInGb * 1024;
const FILE_SIZE_MB = 820;
let result3 = sizeInMb / FILE_SIZE_MB;
console.log("Task3: ", Math.floor(result3));

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
// Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let currentAmount = prompt("Enter amount of money in your wallet:");
let chocolatePrice = prompt("Enter price of one chocolate bar:");
let chocolatesUserCanBuy = Math.floor(currentAmount / chocolatePrice);
let change = currentAmount - chocolatesUserCanBuy * chocolatePrice;
console.log("Task4: ", "User can buy: ", chocolatesUserCanBuy, "Change is: ", change);

// Запитай у користувача тризначне число і виведи його задом наперед.
// Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
let threeDigitNumber = prompt("Enter a three-digit number:");
let lastDigit = threeDigitNumber % 10;
let secondDigit = Math.floor((threeDigitNumber / 10) % 10);
let firstDigit = Math.floor(threeDigitNumber / 100);

let reversedNumber = lastDigit * 100 + secondDigit * 10 + firstDigit;

console.log("Task5: " + "The reversed number is: " + reversedNumber);

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних.
// Вивести суму нарахованих відсотків.
let amountDeposit = prompt("Enter a deposit amount:");
const INTEREST_RATE = 0.05;
let monthRate = INTEREST_RATE / 12;
let interest = amountDeposit * monthRate * 2;
console.log("Task5: " + "The accrued interest is: " + interest.toFixed(2));

// Що повернуть вирази:
console.log(2 && 0 && 3);

console.log(2 || 0 || 3);

console.log((2 && 0) || 3);
