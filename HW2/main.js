//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr= ['hello', 21,'march',2004,'zxc',1000-7,'ghoul','dead inside','SF',true];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let bk1= {title: 'Hr poter' , pagecount: 120,genre: 'fantasy'};
let bk2= {title: 'sf md' , pagecount: 200,genre: 'classic'};
let bk3= {title: 'Ghoul' , pagecount: 20,genre: 'manga-romantic'};

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let bk4= {title: 'Hr poter' , pagecount: 120,genre: 'fantasy',author: [{name:'name',age:'age'}]};
let bk5= {title: 'sf md' , pagecount: 200,genre: 'classic',author:[{name:'name',age:'age'}]};
let bk6= {title: 'Ghoul' , pagecount: 20,genre: 'manga-romantic',author:[{name:'name',age:'age'}]};

//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users=[
    { name:'Taras', username: 'Grizzly', password: 'password'},
    { name:'ZXC', username: 'WDQ', password: 'pasXCVZTrd'},
    { name:'XZC', username: 'ASD', password: 3575},
    { name:'XCV', username: 'DFG', password: 5676},
    { name:'ERTERT', username: 'DFGV', password: 6756},
    { name:'DFGFD', username: 'CVBC', password: 122155},
    { name:'Tymur', username: 'GriH', password: 09887},
    { name:'Artem', username: 'GSFDS', password: 34534},
    { name:'Kony', username: 'GSDFA', password: 45654},
    { name:'Vasily', username: 'ADSFA', password: 867568},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


//- Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
{
let x = 1;
chekick = x !== 0 ? 'True' : 'False';
    console.log(chekick)
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 3;
console.log(time);
if (0 <= time && time <= 15) {
    console.log('Перша частина');
} else if (16 <= time && time <=30){
    console.log('Друга частина');
} else if (31 <= time && time <=45){
    console.log('Третя частина');
}else if (46 <= time && time <=60){
    console.log('Четверта частина');
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 20;
console.log(day);
if (0 <= day && day <= 10) {
    console.log('Перша частина');
} else if (11 <= day && day <=20) {
    console.log('Друга частина');
} else if (21 <= day && day <=31) {
    console.log('Третя частина');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dofw = +prompt('Enter day of week');
switch (dofw)  {

    case 1:
        console.log('Monday');
        break;

    case 2:
        console.log('Tuesday');
        break;

    case 3:
        console.log('Wednesday');
        break;

    case 4:
        console.log('Thursday');
        break;

    case 5:
        console.log('Friday');
        break;

    case 6:
        console.log('Saturday');
        break;

    case 7:
        console.log('Sunday');
        break;

    default:
        console.log('?????');
}

//- Користувач вводить або має два числа.Потрібно знайти та вивести максимальне число з тих двох .Також потрібно врахувати коли введені рівні числа.

let num1 = 5;
console.log(num1);
let num2 = 9;
console.log(num2);
if (num1 > num2){
    console.log('Перше число' ,num1);
} else if (num1 < num2){
    console.log('Друге число', num2);
} else if (num1 === num2){
    console.log('Рівні числа ' ,num1,num2);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, за допомогою  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = '';
if (x === '' || x === null || x === undefined || x === 0){
    x = 'default';
}
console.log(x);


//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[0].title}: Супер`);
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[1].title}: Супер`);
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[2].title}: Супер`);
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[3].title}: Супер`);
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[4].title}: Супер`);
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[5].title}: Супер`);
}

