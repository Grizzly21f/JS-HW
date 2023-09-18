//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// function submitForm (){
//     let name = document.getElementById('name').value;
//     let surname = document.getElementById('surname').value;
//     let age = document.getElementById('age').value;
//
//     let person = {
//         name,surname,age
//     };
//
//     let resultDiv = document.getElementById('result');
//     resultDiv.innerHTML =  JSON.stringify(person, null, 2);
// }

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let numberElme = document.getElementById('num');
// let currentn = localStorage.getItem('storedNumber');
//     if (currentn === null) {
//         currentn = 0;
//     } else {
//         currentn = parseInt(currentn);
//     }
// numberElme.innerHTML = currentn;
// currentn += 1;
// localStorage.setItem('storedNumber', currentn);

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// let currentd = new Date();
// let arr = JSON.parse(localStorage.getItem('data')) || [];
// arr.push(currentd);
// localStorage.setItem('data', JSON.stringify(arr));

//зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// let arr = [];
// for (let i = 0; i < 100; i++) {
//     arr.push({name: 'User' + i,age: i + 1,id: i + 1});
// }
// console.log(arr);
// let pages = document.getElementById('pages');
// let left = document.getElementById('bt1');
// let right = document.getElementById('bt2');
//
// let startIndex = 0;
// let ten = 10;
//
// function dObjects(start) {
//     pages.innerHTML = '';
//     for (let i = start; i < start + ten; i++) {
//         let p = document.createElement('p')
//         p.innerHTML = `${arr[i].name} / age - ${arr[i].age} / id - ${arr[i].id}`
//         pages.appendChild(p);
//     }
// }
//
//
// dObjects(startIndex)
//
// bt1.onclick = function () {
//     if (startIndex === 0) {
//         startIndex = 0;
//         dObjects(startIndex)
//     } else {
//         startIndex -= 10;
//         dObjects(startIndex)
//     }
// }
//
// bt2.onclick = function () {
//     if (startIndex === 90) {
//         startIndex = 90;
//         dObjects(startIndex)
//     } else {
//         startIndex += 10;
//         dObjects(startIndex)
//     }
// }
//



//Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let hide = document.getElementById('bt');
// let block = document.getElementById('block');
// let flag = false;
// hide.onclick = function () {
//     if (!flag) {
//         block.style.width = '0px';
//         block.style.height = '0px';
//         block.style.backgroundColor = 'none';
//         flag = !flag;
//     } else {
//         block.style.width = '300px';
//         block.style.height = '300px';
//         block.style.backgroundColor = 'black';
//         flag = !flag;
//     }
// };

//створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let ok = document.getElementById('bt');
// ok.onclick = function () {
//     let fr = document.getElementById('submit').value
//     if (fr < 18) {
//         document.write('Тобі нема 18')
//     }
// }

//Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)

let bt = document.getElementById('bt');
let table = document.getElementById('Table');


























//*** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

// let curntime = new Date().getTime();
// let time = localStorage.getItem('time');
// let number = JSON.parse(localStorage.getItem('num')) || 100;
//
// let hgrn = document.getElementById('hgrn');
//
// if (time && curntime - time > 10000) {
//     number += 10;
//     localStorage.setItem('num', number.toString());
// }
//
// hgrn.innerText = number + 'grn';
// localStorage.setItem('time',curntime.toString());
//






