// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRectangle(a, b) {
    return a * b
}

console.log(areaRectangle(40, 30));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const PI = 3.14;

function areaCircle(r) {
    return PI * r ** 2
}

console.log(areaCircle(8))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(r, h) {
    return 2 * PI * r ** 2 + 2 * PI * r * h
}

console.log(areaCylinder(24, 100))
// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function arr(list) {
    for (let user of users) {
        console.log(user);
    }
}

arr(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

createParagraph('TEXT');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function creatList(text) {
    document.write(`<ul>
     <li>${text}</li>
     <li>${text}</li>
     <li>${text}</li>
</ul>`);
}

creatList('text');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function creatList2(text, quantity) {
    let i = 0;
    document.write(`<ul>`);
    while (i < quantity) {
        document.write(`
     <li>${text}</li>
`);
        i++;
    }
    document.write(`</ul>`);
}

creatList2('text', 3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let items = [55, 88, 'text', true, false, 'text'];

function creatList3(arr) {
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`
     <li>${arrElement}</li>
`);
    }
    document.write(`</ul>`);
}

creatList3(items);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users2 = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28}
]

function showInDocument(arr) {
    for (const arrElement of arr) {
        document.write(`<div>id:${arrElement.id} name:${arrElement.name} age:${arrElement.age}</div>`);
    }
}

showInDocument(users2);
// - створити функцію яка повертає найменьше число з масиву
let number = [88, 33, 5, 8, 22, 564];

function returnLessNumb(arr) {
    return Math.min(...arr);
}

console.log(returnLessNumb(number));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sum(number));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    [index1, index2] = [index2, index1];
    console.log(arr, index1, index2);
}

swap(1, 2, 3);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    if (exchangeCurrency === 'USD') {
        console.log(sumUAH / currencyValues[0].value);
    } else if (exchangeCurrency === 'EUR') {
        console.log(sumUAH / currencyValues[1].value)
    } else {
        console.log('Не корректно выбрана валюта');
    }
}

exchange(20000, [{currency: 'USD', value: 10}, {currency: 'EUR', value: 12}], 'USD');