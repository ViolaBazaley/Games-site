// // Задание 1
// //Создайте переменную a. Запишите в нее значение 10, выведите его на экран с помощью метода alert(). Затем запишите в нее же значение 20, выведите его на экран.

// let a = 10;
// alert (a);
// a = 20;
// alert (a);

// // Задание 2 
// //Создайте переменную и присвойте ей значение года выпуска первого iPhone. Выведите значение переменной на экран.

// const iphoneYear = 2007;
// alert (iphoneYear);

// // Задание 3 
// //Создайте переменную и присвойте ей значение имени создателя языка JavaScript. Выведите значение переменной на экран.

// const jsCreator = 'Брендан Эйх';
// console.log (jsCreator);

// // Задание 4 
// //Создайте две переменные: 10 и 2. С помощью метода alert() выведите на экран их сумму, разность, произведение и частное (результат деления).

// let b = 10;
// let c = 2;
//  alert (b + c);
//  alert (b - c);
//  alert (b * c);
//  alert (b / c);


// //  Задание 5
// //Возведите 2 в 5-ю степень. Результат запишите в переменную result и выведите на экран с помощью метода alert()

// let d = 2;
// let power = 2 ** 5;
// alert (power);


// // Задание 6
// //Даны переменные: a = 9 и b = 2. Найдите остаток от деления a на b и выведите результат на экран с помощью метода alert()

// let x = 9;
// let y = 2;
// let remainder = x % y;
// alert (remainder);


// // Задание 7
// //Перепишите код с использованием операторов присваивания и инкремента/декремента (количество строк должно остаться прежним):

// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num += 1;
// num -= 1;
// alert(num);


// // Задание 8
// // Создайте переменную age, присвойте ей значение с помощью метода prompt() «Сколько вам лет?». Результат выведите с помощью alert()

// let age = prompt ('Сколько вам лет?');
// alert (age);


// // Задание 9
// // Создайте объект user, у которого есть следующие свойства: 
// // name, age, isAdmin. Значения для свойств придумайте произвольные. Обратите внимание, что для свойства name значение должно быть строковым, для age — числовым, а для isAdmin — булевым.

// // const user = {
// //     name: 'Bob',
// //     age: 22,
// //     isAdmin: true,
// // }



// //  Задание 10
// // С помощью метода prompt() спросите у пользователя его имя и сохраните в переменную. С помощью метода alert() выведите на экран шаблонную строку: Привет, ИМЯ!

// let userName;
// userName = prompt ('Как Вас зовут?');
// alert (`Привет, ${userName}!`)

// // Дополнительное задание
// // Попросите пользователя загадать любое число и сохранить его в переменной number с помощью метода prompt(). Удвоить загаданное число, сохранить результат в новой переменной и показать его пользователю с помощью метода alert(). К удвоенному числу прибавить 10, сохранить результат в новой переменной и показать его пользователю с помощью метода alert(). Полученное число разделить на 2, сохранить результат в новой переменной и показать его пользователю с помощью метода alert(). Из результата вычесть первоначальное загаданное число, сохранить результат в новой переменной и показать его пользователю с помощью метода alert(). Сообщите пользователю, что ответ равен 5


// let number = prompt ('Загадайте любое число');
// let doubleNumber = 2 * number;
// alert (doubleNumber);
// let tenNumber = doubleNumber + 10;
// alert (tenNumber);
// let divideNumber = tenNumber / 2;
// alert (divideNumber);
// let resultNumber = divideNumber - number;
// alert (resultNumber);
// alert ("Ответ равен 5");


// // Задание 1
// // Создайте программу проверки правильности введенного пароля по следующему алгоритму
// let password = 'скайпро';
// let namePass = prompt ('Введите пароль');
// if (password === namePass) { 
//     alert('Пароль введен верно')
// } else { 
//     alert('Пароль введен неправильно')
// }

// // Задание 2

// let c = 10;
// if (c > 0 && c < 10) {
//     console.log ('Верно');  
// } else {
//     console.log ('Неверно');
// }

// // Задание 3
// // Создайте две переменные — d и e, запишите в них любые числа.
// // Если одна из переменных больше 100, выведите в консоль «Верно», иначе выведите «Неверно».
// // Для решения задачи используйте логический оператор || (логическое ИЛИ).

// let d = 5;
// let e = 107;
// if (d > 100 || e > 100) {
//     console.log ('Верно');
// } else { 
//     console.log ('Неверно');   
// }

// // Задание 4
// // Исправьте код с помощью преобразования типов, чтобы на экран выводилось число 5, а не строка '23'

// let a = '2';
// let b = '3';
// // Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
// alert(Number (a) + Number (b));



// // Задание 5
// // Напишите программу, которая определяет по номеру месяца в году, к какому сезону этот месяц принадлежит. Например, 1-й месяц (он же январь) принадлежит к сезону «зима».
// // Для написания программы используйте оператор switch. Для обозначения номера месяца используйте переменную monthNumber, которая равна 12. Пропишите условие, при котором программа не будет выполняться (номер месяца больше 13).

// let monthNumber = Number (prompt ('Напишите номер месяца'));
//  switch (monthNumber) {
//     case 1:
//     case 2:
//     case 12:
//         console.log ('зима')
//         break;
//     case 3:
//     case 4:
//     case 5: 
//         console.log ('весна')
//         break;
//     case 6:
//     case 7:
//     case 8:
        
//         console.log ('лето')
//         break;
//     case 9:
//     case 10:
//     case 11:          
//         console.log ('осень')
//         break;
 
//     default:
//         break;
//  }

// // Дополнительные задания
// // Задание 1
// // Создайте программу, проверяющую число на четность/нечетность по следующему алгоритму: Создайте переменную и присвойте ей значение с помощью метода «Пожалуйста, введите любое число». prompt() Добавьте проверку: является ли введенное значение числом. Подсказка: при приведении строки к числу нам вернется либо корректное значение, либо NaN.

// let p = prompt ("Пожалуйста, введите любое число");
// if (Number(p) % 2 == 0) {
//     alert ('Четное число');  
// } else { 
//     alert ('Нечетное число');     
// }

// if (isNaN(Number(p))) {
//     console.log ('Вы ввели не число');
// }

// // Задание 2
// // Представим, что мы работаем в банке. У нашего банка есть сайт, на который можно зайти с компьютера или телефона, а также мобильное приложение. И нам, и клиенту удобнее с телефона пользоваться мобильным приложением. Поэтому каждый раз, когда пользователь заходит на сайт с телефона, мы должны выдавать ему ссылку на скачивание приложения. Но мы не знаем, iOS или Android он использует.

// // Напишите программу, которая определяет, чем пользуется клиент (iOS или Android), и выдает соответствующее сообщение для обоих вариантов.
// // Объявите переменную clientOS, которая равна 0 или 1. (0 — iOS, 1 — Android). При отработке программы в консоли должно выдаваться сообщение об установке соответствующего приложения.Например, для iOS оно будет звучать так: «Установите версию приложения для iOS по ссылке».
// // А для Android так: «Установите версию приложения для Android по ссылке».


// let clientOS = 0;
// if (clientOS == 0) {
//     console.log ('Установите версию приложения для iOS по ссылке');
    
// } else {
//     console.log ('Установите версию приложения для Android по ссылке');
// }

// // Задание 3
// // К нам пришли коллеги и сообщили, что нам нужно знать не только операционную систему телефона, но и год его создания: от этого зависит, подойдет ли приложение для телефона или оно просто не установится. Если телефон произведен с 2015 по нынешний год, то приложение будет работать корректно. Если телефон произведен ранее 2015 года, то клиенту нужно посоветовать установить облегченную версию приложения. Ваша задача: написать программу, которая выдает соответствующее сообщение клиенту при наличии двух условий: операционной системы телефона (iOS или Android) и года производства. Если год выпуска ранее 2015 года, то к сообщению об установке нужно добавить информацию об облегченной версии. Например, для iOS оно будет звучать так: «Установите облегченную версию приложения для iOS по ссылке». А для Android так: «Установите облегченную версию приложения для Android по ссылке». При этом для пользователей с телефоном с 2015 года выпуска нужно вывести обычное предложение об установке приложения.Для обозначения года создания используйте переменную clientDeviceYear, где необходимо указать 2015 год. Вложенность больше двух этажей не допускается (условный оператор внутри условного оператора).

// let clientDeviceYear = 2024;
// let system = prompt ('IOS/Android');
// if (system === 'IOS') {
//   if (clientDeviceYear > 2015) {
//     console.log ('Установите приложение')    
//  } else {
//     console.log ('Установите облегченную версию приложения для iOS по ссылке')
//  }   
// } else if (system === 'Android') {
//     if (clientDeviceYear > 2015) {
//         console.log ('Установите приложение')    
//      } else {
//         console.log ('Установите облегченную версию приложения для Android по ссылке')
//      }   
    
// }

// // Задание 1
// // Выведите в консоль 2 раза слово «Привет»

// for (let i = 0; i < 2; i++) {
//     console.log('Привет');   
// }

// // Задание 2
// // Выведите в консоль цифры от 1 до 5

// for (let i = 1; i <= 5; i++) {
//     console.log(i);   
// }

// // Задание 3
// // Выведите в консоль числа от 7 до 22

// for (let i = 7; i <= 22; i++) {
//     console.log(i);   
// }


// // Задание 4
// // Есть объект (назовем его 
// // obj
// // ), который содержит следующие пары ключ-значение:

// // "Коля" : '200'
// // "Вася" : '300'
// // "Петя" : '400'

// const obj = {
//     Nik: '200',
//     Vasya: '300',
//     Petay: '400'

// }
// for (let key in obj) {
//     console.log(`${key}: ${obj[key]}$`);
    
// }

// // Задание 5
// // Дано число n=1000. Ваша задача — делить его на 2 до тех пор, пока результат деления не станет меньше 
// // 50.
// // Определите, какое число получится в результате.
// // Вычислите количество итераций (проходов цикла), которые потребовались для достижения результата, и запишите это количество в переменную 
// // num

// let n = 1000;
// let num =0;
// while (n >=50) {
//     n /=2
//     console.log(n);
//     num++;
// }
// console.log(`Количество циклов равно ${num}`);

// // Задание 6
// // В вашей компании пятница является отчетным днем.
// // Нужно написать программу, которая: считает дни месяца по датам, определяет, какой день пятница,
// // выводит сообщение с напоминанием, что нужно подготовить еженедельный отчет.
// // Условия задачи:
// // Создайте переменную, которая хранит в себе номер первой пятницы месяца (число от 1 до 7).
// // Выведите на каждую пятницу месяца (включая полученную) сообщение следующего вида: "Сегодня пятница, ...-е число. Необходимо подготовить отчет."
// // Исходите из того, что в нашем месяце 31 день. Должно вывестись от 4 до 5 сообщений с напоминаниями по разным датам.

// let dayFriday = 7;
// let daymonth = 31;
// for (let i = dayFriday; i <= daymonth; i += 7) {
//    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
    
// }

// // Задание 1
// // Дано число k = 100. Ваша задача — вычитать из него 7 до тех пор, пока результат вычитания не станет меньше 
// // 0. Определите, какое число получится в результате. Вычислите количество итераций (проходов цикла), которые потребовались для достижения результата, и запишите это количество в переменную 
// // iterations

//  let k = 100;
//  let iterations = 0;
//  while (k > 0 ) {
//     k = k - 7;
//     iterations++;
        
// }
// console.log(`Результат: ${k}`);
//  console.log(`Количество интераций ${iterations}`);


// //  Задание 2
// //  Создайте массив months с названиями всех месяцев года. Напишите программу, которая выводит название каждого месяца и его порядковый номер  году.


// const month = {
//     January: '1',
//     February: '2',
//     March: '3',
//     April: '4',
//     May: '5',
//     June: '6',
//     July: '7',
//     August: '8',
//     September: '9',
//     October: '10',
//     November: '11',
//     December: '12'
// }
// for (let key in month) {
//     console.log(`${key}: ${month[key]}`);
// }

// // Задание 3
// // Создайте объект, описывающий книгу, с такими свойствами как "название", "автор", "год издания", "жанр". Напишите код, который выводит все свойства этого объекта в консоль.

// const book = {
//     name: 'Harry Potter and the Philosophers Stone',
//     author: 'Joanne Rowling',
//     year: '1997',
//     genre: 'fantasy novel'
// }

// for (let key in book) {
//     console.log(`${key}: ${book[key]}`);
// }

// // Задание 4
// // Создайте массив из 10 случайных чисел. Напишите код, который находит минимальное число в массиве и выводит его в консоль.


// let array = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

// // Находим минимальное число в массиве
// let minNumber = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] < minNumber) {
//         minNumber = array[i];
//     }
// }
// console.log(minNumber);


// //ДЗ №5 ФУНКЦИИ
// // Задание 1

// // function min(a, b) {
// //    if (a < b) {
// //     return a;
    
// //    } else {
// //     return b;
// //    }
// // }

// // console.log(min(8, 4));
// // console.log(min(6, 6));

// const min = (a, b) => (a < b) ? a : b 
    
// console.log(min(8, 4));
// console.log(min(6, 6));

// // Задание 2
// // function evenNumber(n) {
// //     if (n % 2 == 0) {
// //         return 'Число четное';
// //     } else {
// //         return 'Число нечетное';
        
// //     }
    
// // }

// // console.log(evenNumber(17));
// // console.log(evenNumber(18));

// const evenNumber = (n) => (n % 2 == 0) ? 'Число четное' : 'Число нечетное'
    
// console.log(evenNumber(12));
// console.log(evenNumber(17));

// // Задание 3
// function square(number) {
//     console.log(number ** 2);
    
// }

// const up = (k) => k ** 2;

// square(10);
// console.log(up(4));


// // Задание 4

// function age(question) {
//     let userAnswer = +prompt(question);


//     if (userAnswer <  0) {
//         alert('Вы ввели неправильное значение');
        
        
//     } else if (userAnswer <  12){
//         alert('Привет, друг!');
        
        
//     } else if (userAnswer >= 13) {
//         alert('Добро пожаловать!');
        
        
//     } else {
//         alert('Вы ввели неправильное значение')
//     }
    
// }
// age('Сколько Вам лет?');

// // Задание 5
// function calc(c, d) {
//     console.log(isNaN(c));
//     console.log(isNaN(d));
    
//   if (isNaN(c) || isNaN(d)) {
//     return 'Одно или оба значения не являются числом';
//   } else {
//     return c * d;
//   }    
// }

// console.log(calc(8, 'go'));
 
// // Задание 6

// function cubeNumber() {
//     let number = prompt('Введите число');
//     if (isNaN(number)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return `${number} в кубе равняется ${number ** 3}`;
//     }
// }

//  console.log(cubeNumber()); 

// //  Задание 7

// function getCircleArea() {
//     // ищем площадь круга
//     return this.radius ** 2 * Math.PI;
//  }
//  function getCirclePerimeter() {
//     // периметр окружности
//     return this.radius * 2 * Math.PI;
//  }
 
//  const circle1 = {
//     radius: 10,
  
 
//     // Используем функции, объявленные выше, как методы объекта
//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
//  };
 
//  const circle2 = {
//     radius: 20,
 
 
//     // Используем функции, объявленные выше, как методы объекта
//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
//  };
 
//  // Вызываем методы объектов
//  console.log(circle1.getArea());
//  console.log(circle1.getPerimeter());
//  console.log(circle2.getArea());
//  console.log(circle2.getPerimeter());
 
//  ИГРА

//  let num = prompt('Введите число');

//  let randomNumber= Math.floor(Math.random()*100 + 1);


//  function isCorrectGuess() {
//     console.log(guess === randomNumber());
//  }
//  while (!isCorrectGuess(prompt('Попробуйте угадать число от 1 до 100'))) {
//     if(guess === randomNumber) {
//         console.log('Вы угадали!');
//             }else if (guess > randomNumber) {
//                 console.log('Вы ввели число больше');
//             }
//          }


//     if(prompt('Загадонное число больше или меньше?') === 'блольше') {
//         randomNumber = randomNumber > 50 ? randomNumber : randomNumber + 50;
//     }else if (prompt('Загадонное число больше или меньше?') === 'меньше') {
//         randomNumber = randomNumber < 50 ? randomNumber : randomNumber - 50;
//     }
//  }

//  console.log('Вы угадали!' + randomNumber);
 
// let prNum = prompt('Введите число');
// // let prNum, tempOut;
// prNum = Math.floor ((Math.random() * 100) + 1);
// // let num = 4;
// // tempOut = document.getElementById ('temp-out');
// // tempOut.innerHtml = prNum;

// function f1() {
//     let prNum = prompt('Введите число');
//     let num = prNum;
//     // let num = ;
//     // let number = prompt('Введите число');
//     // let num, out;

//     // num = document.getElementById('mynum').value;
//     // out = document.getElementById('out');

//     if (num == prNum) {
//         console.log('Вы угадали!');
//     }

//     else if (num > prNum) {
//         console.log('Вы ввели число больше');
//     }

//     else {
//         console.log('Вы ввели число меньше');
//     }

    
// }

// console.log(prNum);
// // console.log(num);


let input = document.querySelector(".field__form__input");
let btn = document.querySelector(".field__form__btn");
let check = document.querySelector(".result__check__out");
// let help = document.querySelector(".result__help");
// let count = document.querySelector(".result__count__out");

// let item = 0;
let randNum = Math.floor(Math.random() * 100) + 1;
let userNum;

btn.onclick = function (evt) {
//   evt.preventDefault();
  userNum = input.value;
  console.log(userNum, randNum);
  if (userNum > randNum) {  
    check.textContent = "Пока что не угадали, загаданное число меньше";
    // help.textContent = "Многовато будет";
    // item++;
    // count.textContent = item;
  } else if (userNum < randNum) {
    check.textContent = "Пока что не угадали, загаданное число больше";
    // help.textContent = "Маловато будет";
    // item++;
    // count.textContent = item;
  } else {
    check.textContent = "Поздравляю! Вы угадали число";
    // help.textContent = "В самый раз";
    // item++;
    // count.textContent = item;
  }
};