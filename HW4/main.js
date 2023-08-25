// //створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function calc(a,b) {
//     return  a * b;
// }
// let s = calc(20,40);
// console.log(s);
//
// //створити функцію яка обчислює та повертає площу кола з радіусом r
// function radi(radius) {
//     return Math.PI * Math.pow(radius, 2);
// }
// const circlerad = radi(5);
// console.log(`Площа кола з радіусом  дорівнює `,circlerad);
//
// //створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function rH(radius,height) {
//     return Math.PI * Math.pow(radius, 2 ) * height;
// }
// const rHeight = rH(5, 20);
// console.log(`Площа поверхні циліндра з радіусом  і висотою  дорівнює`,rHeight);
//
//
//
// //створити функцію яка приймає масив та виводить кожен його елемент
// function arr(array) {
//     for ( const user of users){
//         console.log(user);
//     }
//
// }
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// arr(users);

//створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function writer(text) {
//     document.write(`<p>${text}</p>`);
// }
// writer('HELLO WORLD');
//
// //створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function uL(txtul) {
//     document.write(`<ul><li>${txtul}</li><li>${txtul}</li><li>${txtul}</li></ul>`);
// }
// uL('HAHAHAHAHAH');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function txtul(text,num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3 ; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// txtul('Hello',3);
//
// //створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них списоках
// let mass = ['Ghoul', 12,true,'1000-7',10007,'Tokyo',77,]
// function danni(array) {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// danni(mass);
// let users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 21},
//     {id: 4, name: 'katya', age: 15},
//     {id: 4, name: 'olya', age: 15},
//     {id: 4, name: 'Yana', age: 15},
// ];
// function mass(array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<div>ID:${array[i].id}<br>Name:${array[i].name}<br>Age: ${array[i].age}</div>`)
//     }
//
// }
// mass(users);
//
// // - створити функцію яка повертає найменьше число з масиву
// let arrRandom = [];
// for (let i = 0; i < 20; i++) {
//     arrRandom[i] = Math.ceil(Math.random() * 100);
// }
//
// console.log(arrRandom);
//
// function MinNumber(array) {
//     let mNArr = array[0];
//     for (const Element of array) {
//         if (mNArr > Element) {
//             mNArr = Element;
//         }
//     }
//     return mNArr;
// }
//
// let mNArr = MinNumber(arrRandom);
// console.log(mNArr);
//
//
//
// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function SumOfNumberArr(array) {
//     let sum = 0
//     for (const arrElement of array) {
//         sum += arrElement;
//     }
//     return sum;
// }
//
// let sumOfNumber = SumOfNumberArr(arrRandom);
// console.log(sumOfNumber);
//
//
//
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// // let mass = [false, 'dfgdf', 354, true, 'sdfsf', 6754, false, '6sdfsf0', true, 123];
// function Swap(arr, index1, index2) {
//     let temporary = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temporary;
//     return arr;
// }
//
// let newArr = Swap(mass, 0, 5);
// console.log(newArr);
//
//
//
// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function Exchange(sumUAH, currencyValues, exchangeCurrency) {
//
//     let Value;
//
//     for (const currencyValue of currencyValues) {
//         if (currencyValue.currency === exchangeCurrency) {
//             Value = currencyValue.value;
//             break;
//         }
//     }
//
//     return sumUAH / Value;
// }
//
// let convertedSum = Exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}, {currency: 'PL', value: 8}], 'PL')
//
