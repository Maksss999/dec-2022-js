// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
let strLength = strings.map(item => item.length);
console.log(strLength);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strUpperCase = strings.map(item => item.toUpperCase());
console.log(strUpperCase);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strLowerCase = strings.map(item => item.toLowerCase());
console.log(strLowerCase);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let str = ' dirty string   ';
let strResult = str.trim()
console.log(strResult);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
let strMyrnyi = 'Ревуть воли як ясла повні';

function stringToarray(str) {
    return (str.split(' '));
}

let arr = stringToarray(strMyrnyi);
console.log(arr);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let strNumb = numbers.map(item => item.toString())
console.log(strNumb);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
let nums = [11, 21, 3];

function sortNums(arr, callback) {
    return console.log(arr);
}

sortNums(nums, nums.sort((a, b) => a - b));
sortNums(nums, nums.sort((a, b) => b - a));
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortInArray = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration
});
console.log(sortInArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterInArray = coursesAndDurationArray.filter(item => {
    if (item.monthDuration > 5) {
        return true
    }
})
console.log(filterInArray);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let addIdInArray = coursesAndDurationArray.map((item, index) => {
    return {id: index + 1, ...item}
});
console.log(addIdInArray);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let deckOfCard = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamonds', value: '6', color: 'red'},
    {cardSuit: 'diamonds', value: '7', color: 'red'},
    {cardSuit: 'diamonds', value: '8', color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: '10', color: 'red'},
    {cardSuit: 'diamonds', value: 'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'king', color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
    {cardSuit: 'hearts', value: '6', color: 'red'},
    {cardSuit: 'hearts', value: '7', color: 'red'},
    {cardSuit: 'hearts', value: '8', color: 'red'},
    {cardSuit: 'hearts', value: '9', color: 'red'},
    {cardSuit: 'hearts', value: '10', color: 'red'},
    {cardSuit: 'hearts', value: 'jack', color: 'red'},
    {cardSuit: 'hearts', value: 'queen', color: 'red'},
    {cardSuit: 'hearts', value: 'king', color: 'red'},
    {cardSuit: 'hearts', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'}
]
// - знайти піковий туз
console.log(deckOfCard.filter(item => {
    if (item.cardSuit === 'spade' && item.value === 'ace') {
        return true
    }
}));
// - всі шістки
console.log(deckOfCard.filter(item => {
    if (item.value === '6') {
        return true
    }
}));
// - всі червоні карти
console.log(deckOfCard.filter(item => {
    if (item.color === 'red') {
        return true
    }
}));
// - всі буби
console.log(deckOfCard.filter(item => {
    if (item.cardSuit === 'diamonds') {
        return true
    }
}));
// - всі трефи від 9 та більше
console.log(deckOfCard.filter(item => {
    if (item.cardSuit === 'clubs' && item.value !== '6' && item.value !== '7' && item.value !== '8') {
        return true
    }
}));
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let findObjSass = coursesArray.filter(item => {
    return item.modules.some(x => x === 'sass');
});
console.log(findObjSass);
// --написати пошук всіх об'єктів, в який в modules є docker
let findObjDocker = coursesArray.filter(item => {
    return item.modules.some(x => x === 'docker');
});
console.log(findObjDocker);