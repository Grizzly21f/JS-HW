//Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(name,id,age,surname,email,phone){
    this.name = name;
    this.id = id;
    this.age = age;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users=[];

for (let i = 1; i <= 10; i++) {
    let newUser = new User("Name" +i, 6 + i, 12 + i, "Surname" + i,"client@example.com" + i,"123-456-789" + i);
    users.push(newUser);
}
console.log(users);


//Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = users.filter(function (user) {
    return user.id % 2 === 0;
});
console.log(filteredUsers);

//Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users.sort(function(a, b) {
    return a.id - b.id;
});
console.log(users);

//створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

    const clients = [
        new Client(1, 'Іван', 'Петров', 'ivan@example.com', '+380123456789', ['Товар 1', 'Товар 2']),
        new Client(2, 'Марія', 'Сидорова', 'maria@example.com', '+380987654321', ['Товар 3', 'Товар 4']),
        new Client(3, 'Петро', 'Іванов', 'petro@example.com', '+380555555555', ['Товар 5']),
        new Client(4, 'Анна', 'Коваленко', 'anna@example.com', '+380111111111', ['Товар 6', 'Товар 7']),
        new Client(5, 'Олексій', 'Смирнов', 'oleksiy@example.com', '+380222222222', ['Товар 8']),
        new Client(6, 'Тетяна', 'Морозова', 'tetiana@example.com', '+380333333333', ['Товар 9', 'Товар 10']),
        new Client(7, 'Михайло', 'Павленко', 'mikhailo@example.com', '+380444444444', ['Товар 11', 'Товар 12']),
        new Client(8, 'Наталія', 'Лисенко', 'natalia@example.com', '+380555555555', ['Товар 13']),
        new Client(9, 'Денис', 'Григоренко', 'denis@example.com', '+380666666666', ['Товар 14', 'Товар 15']),
        new Client(10, 'Олена', 'Ткаченко', 'olena@example.com', '+380777777777', ['Товар 16', 'Товар 17','Товар 18'])
    ];


console.log(clients);

//Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort(function(a, b) {
    return a.order.length - b.order.length;
});

console.log(clients);

//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.driver = null; // За замовчуванням водій відсутній

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    };

    this.info = function() {
        console.log("інформація про автомобіль: ");
        for (const key in this) {
            if (typeof this[key] == "function") {
                console.log(`${key} - ${this[key]}`)
            }
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Максимальна швидкість підвищена до ${this.maxSpeed} км/год`);
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(`Рік випуску змінено на ${this.year}`);
    };

    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(`Додано водія: ${driver.name}`);
    }
}

const car = new Car("RS6-PERFORMANCE", "AUDI", 2023, 330, 4);


car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2023);
car.addDriver({ name: "Taras Firchuk", age: 20, experience: 1 });
console.log(car);

//Те саме тільки ченрез Class
//class Car {
//   constructor(model, manufacturer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.driver = null; // За замовчуванням водій відсутній
//   }
//

//   drive() {
//     console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
//   }
//

// this.info = function() {
//     console.log("інформація про автомобіль: ");
//     for (const key in this) {
//         if (typeof this[key] == "function") {
//             console.log(`${key} - ${this[key]}`)
//         }
//     }
// };
//

//   increaseMaxSpeed(newSpeed) {
//     this.maxSpeed += newSpeed;
//     console.log(`Максимальна швидкість підвищена до ${this.maxSpeed} км/год`);
//   }
//

//   changeYear(newValue) {
//     this.year = newValue;
//     console.log(`Рік випуску змінено на ${this.year}`);
//   }
//

//   addDriver(driver) {
//     this.driver = driver;
//     console.log(`Додано водія: ${driver.name}`);
//   }
// }
//

// const car = new Car("RS6-PERFORMANCE", "AUDI", 2023, 330, 4);
//
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2023);
// car.addDriver({ name: "Taras Firchuk", age: 20, experience: 1 });
// console.log(car);




//створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}


const cinderellas = [
    new Cinderella("Попелюшка 1", 20, 35),
    new Cinderella("Попелюшка 2", 22, 36),
    new Cinderella("Попелюшка 3", 24, 37),
    new Cinderella("Попелюшка 4", 25, 36),
    new Cinderella("Попелюшка 5", 21, 38),
    new Cinderella("Попелюшка 6", 23, 35),
    new Cinderella("Попелюшка 7", 26, 37),
    new Cinderella("Попелюшка 8", 22, 36),
    new Cinderella("Попелюшка 9", 27, 38),
    new Cinderella("Попелюшка 10", 25, 37)
];

// let cinderellas = [];
// for (let i = 1; i <= 10; i++) {
//     let newCinderella = new Cinderella(+i,+ i,+ i,);
//     users.push(newCinderella);
// }
// console.log(cinderellas);


class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}


const princeCharming = new Prince("Принц", 28, 36);


let matchingCinderella = null;
for (const cinderella of cinderellas) {
    if (cinderella.shoeSize === princeCharming.foundShoeSize) {
        matchingCinderella = cinderella;
        break;
    }
}


if (matchingCinderella) {
    console.log(`Принц має зустрітися з Попелюшкою ${matchingCinderella.name}`);
} else {
    console.log("Принц не знайшов відповідну Попелюшку");
}


const foundCinderella = cinderellas.find(cinderella => cinderella.shoeSize === princeCharming.foundShoeSize);


if (foundCinderella) {
    console.log(`Принц має зустрітися з Попелюшкою ${foundCinderella.name}`);
} else {
    console.log("Принц не знайшов відповідну Попелюшку");
}