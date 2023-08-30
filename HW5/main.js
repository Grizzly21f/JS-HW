// //створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let calc = (a,b) => (a + b);
// console.log(calc(20,40));
//
// //створити функцію яка обчислює та повертає площу кола з радіусом r
// let radius = (r) => ( Math.PI * Math.pow(r, 2));
// console.log(radius(5));
//
// //створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let radh =(r,h) =>(Math.PI * Math.pow(r, 2 ) * h) ;
// console.log(radh(5,2));
//
// //створити функцію яка приймає масив та виводить кожен його елемент
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
// let arr = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// arr(users);
//
// //створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let txt = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// txt(`Hello`);
//
// //створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let uL = (txtul) => {
//     document.write(`<ul><li>${txtul}</li><li>${txtul}</li><li>${txtul}</li></ul>`);
// }
// uL('zxczxczxc');
//
// //створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let  textul = (text,num) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3 ; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// textul('Hello',3);
//
// //створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mass = ['Ghoul', 12,true,'1000-7',10007,'Tokyo',77,]
// let  danni = (array) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// danni(mass);
// //створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users1 = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 21},
//     {id: 4, name: 'katya', age: 15},
//     {id: 4, name: 'olya', age: 15},
//     {id: 4, name: 'Yana', age: 15},
// ];
// let mass2 = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<div>ID:${array[i].id}<br>Name:${array[i].name}<br>Age: ${array[i].age}</div>`)
//     }
//
// }
// mass2(users);
// // - створити функцію яка повертає найменьше число з масиву
// let arrRandom = [];
// for (let i = 0; i < 20; i++) {
//     arrRandom[i] = Math.ceil(Math.random() * 100);
// }
//
// console.log(arrRandom);
//
// let  MinNumber = (array) => {
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
// // // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let  SumOfNumberArr = (array) => {
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
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// // let mass = [false, 'dfgdf', 354, true, 'sdfsf', 6754, false, '6sdfsf0', true, 123];
// let  Swap = (arr, index1, index2) => {
//     let temporary = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temporary;
//     return arr;
// }
//
// let newArr = Swap(mass, 0, 5);
// console.log(newArr);
//
// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let  Exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//
//     let Value;
//
//     for (const currencyValue of currencyValues) {
//         if (currencyValue.currency === exchangeCurrency) {
//             Value = currencyValue.value;
//             return sumUAH / Value;
//         }
//     }
//
//
// }
//
// let convertedSum = Exchange(1000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}, {currency: 'PL', value: 8}], 'PL')
//
//
