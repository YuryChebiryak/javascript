// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var phoneBook = require('./index.js');

// Добавляем телефоны контакту Ivan
console.log("book=" + phoneBook('SHOW'));
phoneBook('ADD Ivan 555-10-01,555-10-03');
console.log("book=" + phoneBook('SHOW'));
phoneBook('ADD Ivan 555-10-02');
console.log("book=" + phoneBook('SHOW'));

// Проверка работы функции SHOW
assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBook('SHOW'),
    [
        'Ivan: 555-10-01, 555-10-03, 555-10-02'
    ],
    'В телефонной книге: "Ivan: 555-10-01, 555-10-03, 555-10-02"'
);
console.log("book=" + phoneBook('SHOW'));

// Проверка работы функции REMOVE_PHONE
assert.equal(
    // Удаляем телефон 555-10-03
    phoneBook('REMOVE_PHONE 555-10-03'),
    true,
    'Телефон 555-10-03 успешно удален'
);
// Добавляем новый контакт
//console.log("book=" + phoneBook('SHOW'));
phoneBook('ADD Alex 555-20-01');
//console.log("book=" + phoneBook('SHOW'));

// Проверка работы функции SHOW
assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBook('SHOW'),
    [
        'Alex: 555-20-01',
        'Ivan: 555-10-01, 555-10-02'
    ],
    'В телефонной книге: "Alex: 555-20-01", "Ivan: 555-10-01, 555-10-02"'
);

// Удаляем телефон
// console.log("book=" + phoneBook('SHOW'));
//console.log("book before remove=" + phoneBook('SHOW'));

phoneBook('REMOVE_PHONE 555-20-01');
//console.log("book after remove=" + phoneBook('SHOW'));

// Проверка работы функции SHOW
assert.deepEqual(
    // Получаем содержимое телефонной книги
    phoneBook('SHOW'),
    [
        'Ivan: 555-10-01, 555-10-02'
    ],
    'В телефонной книге: "Ivan: 555-10-01, 555-10-02"'
);

console.info('OK!');
