// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function findSmallNumb(a, b, c) {
    if (a < b && a < c) {
        console.log(a)
    } else if (b < a && b < c) {
        console.log(b)
    } else if (c < a && c < b) {
        console.log(c)
    }
}

findSmallNumb(44, 12, 2);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function findMoreNumb(a, b, c) {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c) {
        console.log(b)
    } else if (c > a && c > b) {
        console.log(c)
    }
}

findMoreNumb(44, 12, 2);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let numbers = [55, 73, 8, 12, 99, 4, 256, 5, 253];

function findMean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(findMean(numbers));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function maxNumber(list) {
    let min = list[0];
    let max = list[0];
    for (let i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        } else if (list[i] < min) {
            min = list[i];
        }
    }
    console.log(max)
    return min;
}

console.log(maxNumber(numbers))
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let arrNumb = [];
rr = Math.round(Math.random() * 100)
console.log(rr)

function randomElements(arr) {
    let randomNumb
    for (let i = 0; i < 100; i++) {
        randomNumb = Math.round(Math.random() * 100);

    }
    arr = randomNumb;
    console.log(arr)
}

randomElements(arrNumb)
// console.log(randomElements(arrNumb));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
//
//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]