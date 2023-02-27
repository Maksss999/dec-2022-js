// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = []
users.push(
    new User(1, 'anna', 'tsushko', 'annats@gmail.com', '+380978675674'),
    new User(2, 'vasya', 'bodenchuk', 'vasyabod@gmail.com', '+380950473925'),
    new User(3, 'petya', 'vasylenko', 'petyvas@gmail.com', '+3809957395787'),
    new User(4, 'kolya', 'vashchenko', 'kolyavash@gmail.com', '+380957894722'),
    new User(5, 'olya', 'dobzhanska', 'olyadob@gmail.com', '+380958763866'),
    new User(6, 'max', 'galiv', 'maxgal@gmail.com', '+380995766683'),
    new User(7, 'anya', 'klochko', 'anyaklo@gmail.com', '+3809857475933'),
    new User(8, 'oleg', 'hopko', 'oleghop', '+380957479344'),
    new User(9, 'andrey', 'chuychenko', 'andreychy@gmail.com', '+380990556488'),
    new User(10, 'masha', 'hudziy', 'mashahud@gmail.com', '+38095887549')
);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
let arrPairedId = users.filter(item => {
    return item.id % 2 === 0
});
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
users.sort((a, b) => {
    return a.id - b.id
});
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];
clients.push(
    new Client(1, 'anna', 'tsushko', 'annats@gmail.com', '+380978675674', ['tea', 'milk', 'eggs']),
    new Client(2, 'vasya', 'bodenchuk', 'vasyabod@gmail.com', '+380950473925', ['milk', 'juice']),
    new Client(3, 'petya', 'vasylenko', 'petyvas@gmail.com', '+3809957395787', ['tea', 'oil']),
    new Client(4, 'kolya', 'vashchenko', 'kolyavash@gmail.com', '+380957894722', ['eggs', 'oil', 'milk']),
    new Client(5, 'olya', 'dobzhanska', 'olyadob@gmail.com', '+380958763866', ['juice', 'cookies', 'milk']),
    new Client(6, 'max', 'galiv', 'maxgal@gmail.com', '+380995766683', ['tea', 'milk', 'eggs']),
    new Client(7, 'anya', 'klochko', 'anyaklo@gmail.com', '+3809857475933', ['eggs', 'oil', 'milk', 'tea']),
    new Client(8, 'oleg', 'hopko', 'oleghop', '+380957479344', ['milk', 'juice']),
    new Client(9, 'andrey', 'chuychenko', 'andreychy@gmail.com', '+380990556488', ['juice', 'cookies', 'milk']),
    new Client(10, 'masha', 'hudziy', 'mashahud@gmail.com', '+38095887549', ['juice', 'cookies', 'milk'])
);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
clients.sort((a, b) => {
    return a.order.length - b.order.length
});
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна.
function Car(model, maker, year, maxSpeed, engine) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
}

// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
}
let car = new Car('mazd', 'mazd', 33, 664, 94892);
car.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function () {
    console.log(`модель - ${this.model},виробник - ${this.maker},рік випуску - ${this.year},максимальна швидкість  - ${this.maxSpeed},об'єм двигуна - ${this.engine}`)
}
car.info()
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    return this.maxSpeed = newSpeed;
}
car.increaseMaxSpeed(44);
car.drive()
// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newValue) {
    return this.year = newValue;
}
car.changeYear(1);
console.log(car);
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function (driver) {
    this.driver = driver
}
car.addDriver('nnn');
console.log(car);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
class Car2 {

    constructor(model, maker, year, maxSpeed, engine) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    // додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        console.log(`модель - ${this.model},виробник - ${this.maker},рік випуску - ${this.year},максимальна швидкість  - ${this.maxSpeed},об'єм двигуна - ${this.engine}`)
    }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed = newSpeed;
    }

// -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        return this.year = newValue;
    }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
    addDriver(driver) {
        this.driver = driver
    }
}

let car2 = new Car2('ddzd', 'ddzd', 1, 22, 333);
car2.drive()
car2.info()
car2.addDriver('jjj');
console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderellas = [
    new Cinderella('Anna', 23, 37),
    new Cinderella('Olya', 26, 39),
    new Cinderella('Marya', 19, 35),
    new Cinderella('Eva', 28, 38),
    new Cinderella('Emilia', 20, 36),
    new Cinderella('Stella', 22, 40),
    new Cinderella('Dina', 21, 39),
    new Cinderella('Malvina', 22, 39),
    new Cinderella('Emilia', 26, 35),
    new Cinderella('Anna', 30, 41)
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, sizeShoe) {
        this.name = name;
        this.age = age;
        this.sizeShoe = sizeShoe;
    }
}

let prince = new Prince('Vasya', 26, 36);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.sizeShoe) {
        console.log(cinderella);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
const findCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.sizeShoe);
