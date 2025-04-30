// Задание 1
// С помощью метода массива 
// sort
//  отсортируйте массив 
// people
//  по возрастанию возраста и выведите результат в консоль.

// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];

// // Допишите колбэк для sort, изучите, как работает колбэк, в документации
// console.log(people.sort(...));
// // код выше должен вывеcти =>
// // [
// //  { name: 'Олег', age: 7 },
// //  { name: 'Анна', age: 17 },
// //  { name: 'Глеб', age: 29 },
// //  { name: 'Оксана', age: 47 }
// // ]

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

// Задание 2
// Реализуйте функцию 
// filter, которая должна работать аналогично методу массива 
// filter. Возьмите за основу функцию 
// map, которую мы реализовывали на уроке.
// Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова 
// ruleFunction
// , принимать решение о том, добавлять в результирующий массив очередной элемент или нет.

function filter(array, myFunction) {
   const result = [];
for (let index = 0; index < array.length; index++) {
   if (myFunction(array[index])) {
      result.push(array[index]);
   };
   
}
return result;
}


function isPositive(num) {
return num > 0;
}

function isMale(person) {
return person.gender === 'male';
}


console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale));



// Задание 3
// Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. 
// Последней строкой должно выводиться сообщение «30 секунд прошло».

// const intervalId = setInterval(() => {
//    console.log(new Date())
// }, 3000);

// setTimeout(() => {
//    clearInterval(intervalId);
//    console.log('30 секунд прошло')
   
// }, 30000);

// Задание 4
// Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.

// Допишите функцию 
// delayForSecond
//  так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте 
// setTimeout
// .

// function delayForSecond(callback) {
//     setTimeout(callback, 3000);
// }

// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// })



// Задание 5
// Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:

// // Функция delayForSecond через 1 секунду пишет в консоль 
// // «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}


delayForSecond(() => sayHi('Глеб'));


