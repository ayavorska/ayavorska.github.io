"use strict";
// Реалізуй клас User. Під час створення екземпляру на базі цього класу, обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’} (role може бути або admin або user). У разі невірно переданих даних такого об’єкта — попереджати за допомогою alert-у відповідне поле, яке введено некоректно.
//У класі User повинні бути такі компоненти:
// getName
// getRole
// login
// logout
// сhangeName
// changePassword
// У класі Admin повинні бути такі компоненти:
// addUser
// removeUser
// changeUserRole
// getAllUsers
// removeAllUsers

class User {
  constructor(name, role) {
    if (role !== "admin" && role !== "user") {
      alert("Некоректно введенs дані!");
    }
    this.name = name;
    this.role = role;
    this.loggedIn = false;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  changeName(newName) {
    this.name = newName;
  }

  changePassword(newPassword) {
    this.password = newPassword;
  }
}

class Admin extends User {
  constructor(name) {
    super(name, "admin");
    this.users = [];
  }

  addUser(user) {
    if (!(user instanceof User)) {
      alert("Користувач повинен бути екземпляром класу User!");
      return;
    }
    this.users.push(user);
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  changeUserRole(user, newRole) {
    if (!(user instanceof User)) {
      alert("Користувач повинен бути екземпляром класу User!");
      return;
    }
    if (newRole !== "admin" && newRole !== "user") {
      alert("Неправильна роль!");
      return;
    }
    user.role = newRole;
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
  }
}

const user1 = new User("Alina", "user");
const user2 = new User("Slava", "user");
const admin = new Admin("Ivan");

admin.addUser(user1);
admin.addUser(user2);

console.log(admin.getAllUsers());

admin.changeUserRole(user1, "admin");
console.log(user1.getRole());

admin.removeUser(user2);
console.log(admin.getAllUsers());

admin.removeAllUsers();
console.log(admin.getAllUsers());

// В HTML-сторінці додати користувачу можливість створювати свій дашборд годинників.
// Це годинники для різних куточків світу. Необхідно додати input-поле та button, у разі кліка на якому буде створюватися новий годинник. Реалізація WorldClock відбувається через class.
// Кожен екземпляр такого класу — новий годинник. У класі повинні бути такі компоненти:
// getCurrentDate
// getCurrentDateTime
// deleteClock
// 1 кнопка — показує користувачу час у текстовому варіанті
// 2 кнопка — показує користувачу поточну дату й час у текстовому варіанті
// 3 кнопка — видаляє годинник зі «стіни» годинників
class WorldClock {

    constructor(){
    }

    getCurrentDate(){
        return new Date().toLocaleTimeString();
    }
    getCurrentDateTime(){
        return new Date().toLocaleString();
    }

}

const addClockBtn = document.querySelector('#add-clock');
addClockBtn.addEventListener('click', creatingDOMClock);

function creatingDOMClock() {
   
    const inputClockName = document.querySelector('#clock-name');
    const resColumn = document.createElement('div');
    const resultClock = document.querySelector('#result-clock');
    resultClock.appendChild(resColumn);
    resColumn.classList.add('column', 'clock');
    const clockName = document.createElement('div');
    resColumn.appendChild(clockName);
    clockName.classList.add('clock__name');
    clockName.innerHTML = inputClockName.value;
    inputClockName.value = '';
    const date = document.createElement('button');
    const dateAndTime = document.createElement('button');
    const deleteClock = document.createElement('button');
    date.innerHTML = 'Переглянути поточний час';
    dateAndTime.innerHTML = 'Перегляд поточної дати та часу';
    deleteClock.innerHTML = 'Видалити годинник';
    const colockResult = document.createElement('div');
    resColumn.appendChild(colockResult);
    colockResult.classList.add('column', 'clock__result');
    const columnWithBtns = document.createElement('div');
    resColumn.appendChild(columnWithBtns);
    columnWithBtns.classList.add('column', 'btns');
    columnWithBtns.appendChild(date);
    date.classList.add('button', 'date__btn');
    columnWithBtns.appendChild(dateAndTime);
    dateAndTime.classList.add('button', 'date-and-time__btn');
    columnWithBtns.appendChild(deleteClock);
    deleteClock.classList.add('button', 'delete-clock__btn');

    const dateBtn = [...document.querySelectorAll('.date__btn')];
    const dateAndTimeBtn = [...document.querySelectorAll('.date-and-time__btn')];
    const deleteBtn = [...document.querySelectorAll('.delete-clock__btn')];
    const columnClock = [...document.querySelectorAll('.column.clock')]
    const clockResultAll = [...document.querySelectorAll('.clock__result')]
        
    columnClock.forEach((el, index) => {
        resultClock.addEventListener('click', (e) => {
            if (e.target == dateBtn[index]){
                clockResultAll[index].innerText = new WorldClock().getCurrentDate();
            } else if (e.target == dateAndTimeBtn[index]){
                clockResultAll[index].innerText = new WorldClock().getCurrentDateTime();
            } else if (e.target == deleteBtn[index]){
                el.remove();
            }
        });
    });
   
};

