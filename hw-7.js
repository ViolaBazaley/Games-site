// Задание 1
// Преобразовать строку 
// 'js'
//  в верхний регистр.

const a = 'js';
console.log(a.toUpperCase());



// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив,
//  содержащий только те элементы первого массива, 
// которые начинаются со второй строки. Регистр символов не влияет на результат.
function filterByStart(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}

console.log(filterByStart(['Книга', 'учебник', 'Книга о животных'], 'книга'));



// Задание 3
// Округлить число 32.58884:

// До меньшего целого.
// До большего целого.
// До ближайшего целого.

const num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// Задание 4
// Найти минимальное и максимальное значения из чисел 
// 52, 53, 49, 77, 21, 32 и вывести их в консоль.

const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.
function getRandomNumber() {
    console.log(Math.floor(Math.random() * 10) + 1);
}

getRandomNumber();



// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. 
// Длина массива должна быть в два раза меньше переданного числа.

function randomArray(n) {
    const length = Math.floor(n / 2);
    return Array.from({length}, () => Math.floor(Math.random() * n));
}

console.log(randomArray(10));

// Задание 7
// Создать функцию, которая принимает два целых числа
//  и возвращает случайное число в этом диапазоне.

function numberTwo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numberTwo(3, 11));


// Задание 8
// Вывести в консоль текущую дату.

let todaysDate = new Date();
console.log(todaysDate);

// console.log(new Date());


// Задание 9
// Создать переменную 
// currentDate, хранящую текущую дату.
//  Вывести дату, которая наступит через 73 дня после текущей.

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

function formatDate(date) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));

