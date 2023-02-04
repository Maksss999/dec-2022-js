// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let err = ['okten', 'school', 10, 20, 200, -100, -37, 0, true, false];
console.log(err[0]);
console.log(err[1]);
console.log(err[2]);
console.log(err[3]);
console.log(err[4]);
console.log(err[5]);
console.log(err[6]);
console.log(err[7]);
console.log(err[8]);
console.log(err[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'The Prince',
    pageCount: 164,
    genre: 'philosophical literature'
};
let book2 = {
    title: 'The Selfish Gene',
    pageCount: 224,
    genre: 'nonfiction'
};
let book3 = {
    title: '1984',
    pageCount: 328,
    genre: 'dystopian fiction'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.
let bookAuthor1 = {
    title: 'The Prince',
    pageCount: 164,
    genre: 'philosophical literature',
    author: [{
        name: 'Niccolo Machiavelli',
        age: 58
    }]
};
let bookAuthor2 = {
    title: 'The Selfish Gene',
    pageCount: 224,
    genre: 'nonfiction',
    author: [{
        name: 'Richard Dawkins',
        age: 81
    }]
};
let bookAuthor3 = {
    title: '1984',
    pageCount: 328,
    genre: 'dystopian fiction',
    author: [{
        name: 'George Orwell',
        age: 46
    }]
};
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: 'Bebeshko Cheslava',
        username: 'Kaeth',
        password: 'DXEYYm00cd'
    },
    {
        name: 'Omelchuk Pervushko',
        username: 'Xola1',
        password: 'zBBRe78EEf'
    },
    {
        name: 'Lysytska Nadia',
        username: 'Kayitr7oy',
        password: 'WgdzAmEW43'
    },
    {
        name: 'Adamchuk Hrystya',
        username: 'Mauret',
        password: 'XAAtCFsL444'
    },
    {
        name: 'Tokarchuk Kharytia',
        username: 'Ille7i',
        password: '6RMCYwivC'
    },
    {
        name: 'Kokhanenko Sobimir',
        username: 'Ylarish',
        password: 'XqHlk88yAQCz'
    },
    {
        name: 'Dmitriev Nigoslav',
        username: 'Nezabytovska Gertruda',
        password: 'JXhaiDED55'
    },
    {
        name: 'Pezhanska Lyubislava',
        username: 'Ereland',
        password: '55iVzcXxyb'
    },
    {
        name: 'Aniab',
        username: 'Khrystyna Vynnychenko',
        password: 'sToNkQrN66'
    },
    {
        name: 'Lianthi',
        username: 'Trotsky Lives',
        password: '786bxBmGcVt'
    },
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
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1;
if (x !== 0) {
    console.log('Вірно!')
} else {
    console.log('Неверно!')
}
if ((x = 0) !== 0) {
    console.log('Вірно!')
} else {
    console.log('Неверно!')
}
if ((x = -3) !== 0) {
    console.log('Вірно!')
} else {
    console.log('Неверно!')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 30;
if (time <= 14) {
    console.log('Перша четверть години')
} else if (time <= 29) {
    console.log('Друга четверть години');
} else if (time <= 44) {
    console.log('Третя четверть години');
} else if (time <= 59) {
    console.log('Четверта четверть години');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 18;
if (day <= 10) {
    console.log('Перша декада');
} else if (day <= 20) {
    console.log('Друга декада');
} else if (day <= 31) {
    console.log('Третя декада');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей деньь(можна замість плану на день, назву дня англійською).
let numberDay = +prompt('number of the day?')
switch (numberDay) {
    case(1):
        console.log('Monday');
        break;
    case (2):
        console.log('Tuesday');
        break;
    case(3):
        console.log('Wednesday');
        break;
    case(4):
        console.log('Thursday');
        break;
    case (5):
        console.log('Friday');
        break;
    case (6):
        console.log('Saturday');
        break;
    case (7):
        console.log('Sunday');
        break;
    default:
        console.log('from 1 to 7')
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let number1 = 5;
let number2 = 9;
if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
} else if (number1 === number2) {
    console.log(number1 = number2);
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподібні, тобто приводиться до false)
let x2 = 0;
x2 = x2 || 'default';
console.log(x2);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
