"use strick";
//Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву
//продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.
//Написати кілька функцій для роботи з таким масивом:
//1.Виводити весь список на екран таким чином, щоб спочатку йшли продукти,
//що ще не придбані, а потім - ті, що вже придбали.
//2.Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
const shoppingList = [
  {
    name: "apple",
    quantity: 10,
    bought: false,
    pricePerUnit: 1,
    amount: 10,
  },
  {
    name: "milk",
    quantity: 1,
    bought: true,
    pricePerUnit: 3,
    amount: 3,
  },
  {
    name: "tea",
    quantity: 1,
    bought: false,
    pricePerUnit: 5,
    amount: 5,
  },
  {
    name: "avocado",
    quantity: 4,
    bought: true,
    pricePerUnit: 5,
    amount: 20,
  },
];

function displaySortedShoppingList() {
  const sortedList = [...shoppingList].sort((a, b) => {
    return a.bought - b.bought;
  });
  console.log(sortedList);
}
displaySortedShoppingList();

function buyProduct(productName) {
  const existingProductIndex = shoppingList.findIndex(
    (product) => product.name === productName
  );
  if (existingProductIndex > -1) {
    shoppingList[existingProductIndex].bought = true;
    console.log(`Зазначений продукт ${productName} - куплений.`);
  } else {
    console.log(`Продукту з таким ім'ям ${productName} - не знайдено.`);
  }
}
buyProduct("tea");

//3.Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового
//масиву, в якому продукт, що ми шукаємо, буде відсутнім)
//4.Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в
//списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати
//нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12,
//а кількості товарів стало 2, то сума буде 24.
function deleteProduct(productName) {
  const newList = shoppingList.filter(
    (product) => product.name !== productName
  );
  if (newList.length === shoppingList.length) {
    console.log(
      `Продукта з таким іменем: ${productName} - не знайдено в списку.`
    );
  } else {
    console.log(`Продукт ${productName} - видалено зі списку.`);
  }
}
deleteProduct("tea");

function addProduct(productName, quantity, pricePerUnit) {
  const existingProductIndex = shoppingList.findIndex(
    (product) => product.name === productName
  );
  if (existingProductIndex > -1) {
    shoppingList[existingProductIndex].quantity += quantity;
    shoppingList[existingProductIndex].amount +=
      shoppingList[existingProductIndex].quantity * pricePerUnit;
    console.log(
      `Кількість ${productName} змінено на ${shoppingList[existingProductIndex].quantity}.`
    );
  } else {
    const newProduct = {
      name: productName,
      quantity,
      bought: false,
      pricePerUnit,
      amount: quantity * pricePerUnit,
    };
    shoppingList.push(newProduct);
    console.log(`Продукт ${[productName]} додано до списку.`);
  }
}
addProduct("carrot", 5, 2);
addProduct("tea", 5, 5);

//5.Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
//6.Підрахунок суми всіх (не) придбаних продуктів.
//7.Показання продуктів в залежності від суми, (від більшого до меншого /
//від меншого до більшого, в залежності від параметра функції, який вона приймає).
function calculateTotalProducts() {
  let totalProducts = 0;
  shoppingList.forEach((product) => {
    totalProducts += product.amount;
  });
  console.log(`Сума всіх продуктів: ${totalProducts}.`);
}
calculateTotalProducts();

function calculateSumByStatus(bought) {
  let totalProducts = 0;
  shoppingList.forEach((product) => {
    if (product.bought === bought) {
      totalProducts += product.amount;
    }
  });
  
  console.log(`Сума ${bought ? '' : 'не'} придбаних продуктів: ${totalProducts}.`);
}
calculateSumByStatus(false);

