// ПЕРВОЕ ЗАДАНИЕ

// всего существует 8 типов данных, но некоторые выделяют ещё и function в отдельный тип для удобства определения функции

// Первый тип данных  undefined
let userUndefined;
console.log(userUndefined);
console.log(typeof userUndefined);

// =============================================

//  второй тип данных Null, здесь есть небольшой баг, который оставлен снезапямятных времён, при команде typeof в консоль выводится тип object, но это не так, можно обратиться к несуществующему классу, тогда тип данных тоже будет Null
let userNull = null;
let classNull = document.querySelector('.body');
console.log(typeof userNull);
console.log(classNull);

// =============================================

// третий тип данный Boolean, этот тип данных принимает толко 2 значения, true и false, то бишь правда или ложь
let userBoolean = true;
console.log(userBoolean);
console.log(typeof userBoolean);

// =============================================

// 4й тип данный Numbers, числа, могут быть как целыми, так и числами с плавающей запятой, этот тип данных принимает значения number, infinity (бесконечность) и NaN (невозможно сосчитать)
let userAge = 25;
let userHalf = 2.5;
let userInfinity = 10 / 0;
let userNaN = 100 - 'какая-то строка';

console.log(userAge);
console.log(typeof userAge);

console.log(userHalf);
console.log(typeof userHalf);

console.log(userInfinity);
console.log(typeof userInfinity);

console.log(userNaN);
console.log(typeof userNaN);

// =============================================

// 5й тип данных Bigint, это числа больше чем число 9007199254740991 или же меньше чем -9007199254740991, потому что JavaScript не умеет работать с числами больше или меньше тех, что выше, как я понял

let userBigint = 9007199254740992n;
console.log(typeof userBigint);

// =============================================

// 6й тип данных String, это строка, строкой может быть любой текст или число, чтобы записать строчку, нужно помещать нудный текст в кавычки, и если между одинарными и двойными в js нет разницы, то обратные кавычки имеют роль и добавляют функционал, можно в строку встраивать значения через ${название переменной}.
let userName = 'Женя Кохтенко';
console.log(typeof userName);

// =============================================

// 7й тип данных object, в объекте содержиться набор свойств/пар, состоящих из ключа и значения

let userObject = {
  myName: 'Женя',
  myAge: 25,
}
console.log(userObject);
console.log(typeof userObject);

// =============================================

// 8й тип данных Symbol, этот тип используется крайне редко, это индивидуальный идентификатор, как id проще говоря

let userSymbol = Symbol("id");
console.log(typeof userSymbol);

// ====================================================================================

// ВТОРОЕ ЗАДАНИЕ

var myVar = 'строка изменяемой переменной';
console.log(myVar);
myVar = 'новое значение старой переменной вариабл';
console.log(myVar);

let myLet = 'строка изменяемой переменной';
console.log(myLet);
myLet = 'новое значение новой переменной';
console.log(myLet);

const myConst = 'строка не изменяемой переменной';
console.log(myConst);

// ====================================================================================

// ТРЕТЬЕ ЗАДАНИЕ
// 1й тип ========================
let myUndefined;
var myUndefinedVar;

console.log(myUndefined);
console.log(typeof myUndefined);

console.log(myUndefinedVar);
console.log(typeof myUndefinedVar);

// 2й тип ========================
let myNull = null;
let mNull = document.querySelector('.body');
console.log(myNull);
console.log(mNull);

// 3й тип ========================
let myBoolean = true;
let mBoolean = false;

console.log(myBoolean);
console.log(typeof myBoolean);

console.log(mBoolean);
console.log(typeof mBoolean);

// 4й тип ========================

let myAge = 25;
let myHalf = 2.5;
let myInfinity = 10 / 0;
let myNaN = 100 - 'какая-то строка';

console.log(myAge);
console.log(typeof myAge);

console.log(myHalf);
console.log(typeof myHalf);

console.log(myInfinity);
console.log(typeof myInfinity);

console.log(myNaN);
console.log(typeof myNaN);

// 5й тип ========================

let myBigint = 9007199254740992n;
let mBigint = -9007199254740992n;
console.log(typeof myBigint);
console.log(typeof mBigint);

// 6й тип ========================

let myName = 'Женя Кохтенко';
let age = '25';
console.log(typeof userName);
console.log(typeof age);


// 7й тип ========================

let myObject = {
  myName: 'Женя',
  myAge: 25,
}

console.log(myObject);
console.log(typeof myObject);

myInfo = new Object({
  myName: 'Петро',
  myAge: 78,
});

console.log(myInfo);
console.log(typeof myInfo);

// 8й тип ========================
let mySymbol = Symbol("id");
console.log(typeof mySymbol);

let mSymbol = Symbol();
console.log(typeof mSymbol);


// ====================================================================================

// ЧЕТВЁРТОЕ ЗАДАНИЕ

// Строка с каждым типом данных, после сложения типа файлов будет string:
let addUndefined;
let summUndefined = "строка " + addUndefined;
console.log(summUndefined);

let addNull = null;
let summNull = "строка " + addNull;
console.log(summNull);

let addBoolean = true;
let summBoolean = "строка " + addBoolean;
console.log(summBoolean);

let addNumber = 24;
let summNumber = "2" + addNumber;
console.log(summNumber);

let addBigint = 9007199254740992n;
let summBigint = "строка " + addBigint;
console.log(summBigint);

let addString = "ещё строка";
let summString = "строка " + addString;
console.log(summString);

let addObject = {
  addName: "Женя",
  addAge: 25,
};
let summObject = "строка " + addObject;
console.log(summObject);

let addSymbol = Symbol("♂");
let stringSymbol = (String(addSymbol));
let summSymbol = "строка " + stringSymbol;
console.log(summSymbol);


// Число с каждым типом данных, после сложения типа файлов будет number:

let numUndefined;
let addNumUndefined = 25 + numUndefined;
console.log(addNumUndefined);


let numNull = null;
let addNumNull = 25 + numNull;
console.log(addNumNull);

let numBoolean = true;
let addNumBoolean = 25 + numBoolean;
console.log(addNumBoolean);

let numNumber = 24;
let addNumNumber = 25 + numNumber;
console.log(addNumNumber);

let numBigint = 9007199254740992n;
let numberBig = (Number(numBigint));
let addNumBigint = 25 + numberBig;
console.log(addNumBigint);

let numString = '2';
let addNumString = 25 + numString;
console.log(addNumString);

let numObject = {
  numName: "Женя",
  numAge: 25,
};
let addNumObject = 25 + numObject;
console.log(addNumObject);

// Тип данных символ не преобразуется в number поэтому будет ошибка
// let numSymbol = Symbol("id");
// let numberSymbol = (Number(numSymbol));
// let addNumSymbol = 25 + numSymbol;
// console.log(typeof numSymbol);

// ====================================================================================

// ПЯТОЕ ЗАДАНИЕ subtraction

let subUndefined;
let subtUndefined = "строка " - subUndefined;
console.log(subtUndefined);

let subNull = null;
let subtNull = "строка " - subNull;
console.log(subtNull);

let subBoolean = true;
let subtBoolean = "строка " - subBoolean;
console.log(subtBoolean);

let subNumber = 24;
let subtNumber = "2" - subNumber;
console.log(subtNumber);

let subBigint = 9007199254740992n;
let subBig = (Number(subBigint));
let subtBigint = "строка " - subBig;
console.log(subtBigint);

let subString = "ещё строка";
let subtString = "строка " - subString;
console.log(subtString);

let subObject = {
  subName: "Женя",
  subAge: 25,
};
let subtObject = "строка " - subObject;
console.log(subtObject);

let subSymbol = Symbol("♂");
let stringSubSymbol = (String(subSymbol));
let subtSymbol = "строка " - stringSubSymbol;
console.log(subtSymbol);





let numSubUndefined;
let subtNumUndefined = 25 - numSubUndefined;
console.log(subtNumUndefined);


let numSubNull = null;
let subtNumNull = 25 - numSubNull;
console.log(subtNumNull);

let numSubBoolean = true;
let subtNumBoolean = 25 - numSubBoolean;
console.log(subtNumBoolean);

let numSubNumber = 24;
let subtNumNumber = 25 - numSubNumber;
console.log(subtNumNumber);

let numSubBigint = 9007199254740992n;
let numberSubBig = (Number(numSubBigint));
let subtNumBigint = 25 - numberSubBig;
console.log(subtNumBigint);

let numSubString = '2';
let subtNumString = 25 - numSubString;
console.log(subtNumString);

let numSubObject = {
  numName: "Женя",
  numAge: 25,
};
let subtNumObject = 25 - numSubObject;
console.log(subtNumObject);

// Тип данных символ не преобразуется в number поэтому будет ошибка
// let numSubSymbol = Symbol("id");
// let numberSubSymbol = (Number(numSubSymbol));
// let subtNumSymbol = 25 - numberSubSymbol;
// console.log(subtNumSymbol);

//====================================================================================

// ШЕСТОЕ ЗАДАНИЕ

let log = prompt("введите login"),
  pass = prompt("введите password");

if (log === 'kykold', pass === '1234asdQQ') {
  alert('Добро пожаловать!');
} else {
  alert('Ошибка входа');
}

//====================================================================================

// СЕДЬМОЕ ЗАДАНИЕ

let logYear = prompt("введите год рождения");
let logAge = '2022' - logYear;

if (logAge >= 16 && logAge < 100) {
  alert('Вам ' + logAge + ' лет, ' + 'добро пожаловать');
} else if (logAge >= 100) {
  alert('Не уверен, что вам действительно ' + logAge + 'лет, но это останется на вашей совести. Добро пожаловать')
} else {
  alert('Вам меньше 16ти лет. вход воспрещен')
}

//====================================================================================

// ВОСЬМОЕ ЗАДАНИЕ

let yearExperience = prompt("введите ваш трудовой стаж в целых годах");

if (yearExperience <= 1) {
  alert('У вас ещё нет надбавки за стаж');
} else if (yearExperience <= 2) {
  alert('Ваша надбавка за стаж 5%');
} else if (yearExperience <= 3) {
  alert('Ваша надбавка за стаж 10%');
} else if (yearExperience <= 4) {
  alert('Ваша надбавка за стаж 15%');
} else if (yearExperience <= 5) {
  alert('Ваша надбавка за стаж 20%');
} else if (yearExperience <= 6) {
  alert('Ваша надбавка за стаж 25%');
} else if (yearExperience <= 7) {
  alert('Ваша надбавка за стаж 30%');
} else if (yearExperience <= 8) {
  alert('Ваша надбавка за стаж 35%');
} else if (yearExperience <= 9) {
  alert('Ваша надбавка за стаж 40%');
} else if (yearExperience <= 10) {
  alert('Ваша надбавка за стаж 45%');
} else if (yearExperience <= 11) {
  alert('Ваша надбавка за стаж 50% и это максимальная надбавка, поздравляем');
} else {
  alert('У вас максимальная надбавка за стаж 50%');
}

//====================================================================================

// ДЕВЯТОЕ ЗАДАНИЕ

let day = prompt('Введите день недели.');
// на иф элсах

if (day == 1) {
  alert('Monday')
} else if (day == 2) {
  alert('Tuesday')
} else if (day == 3) {
  alert('Wednesday')
} else if (day == 4) {
  alert('Thursday')
} else if (day == 5) {
  alert('Friday')
} else if (day == 6) {
  alert('Saturday')
} else if (day == 7) {
  alert('Sunday')
} else {
  alert('Ошибка! В неделе 7 дней, нужно ввести какой сегодня день')
}

// на свич кейс
switch (day) {
  case '1':
    alert('Monday')
    break;
  case '2':
    alert('Tuesday')
    break;
  case '3':
    alert('Wednesday')
    break;
  case '4':
    alert('Thursday')
    break;
  case '5':
    alert('Friday')
    break;
  case '6':
    alert('Saturday')
    break;
  case '7':
    alert('Sunday')
    break;

  default:
    alert('Ошибка! В неделе 7 дней, нужно ввести какой сегодня день')
    break;
}

// На тернарном операторе ?

day == 1 ? alert('Monday') :
  day == 2 ? alert('Tuesday') :
  day == 3 ? alert('Wednesday') :
  day == 4 ? alert('Thursday') :
  day == 5 ? alert('Friday') :
  day == 6 ? alert('Saturday') :
  day == 7 ? alert('Sunday') :
  alert('Ошибка! В неделе 7 дней, нужно ввести какой сегодня день');

//====================================================================================

// ДЕСЯТОЕ ЗАДАНИЕ

let numb = prompt('Введите любое число, если заданое число будет меньше нуля, то вы увидете "-1", если равно нулю, то увидете "0", а если больше нуля, то увидете "1"')

if (numb < 0) {
  alert('-1')
} else if (numb == 0) {
  alert('0')
} else {
  alert('1')
}

//====================================================================================

// ОДИННАДЦАТОЕ ЗАДАНИЕ

let message;
let login = prompt('Кто вы? Сотрудник или Директор?')

login == 'Сотрудник' ? message = 'Привет!' :
  login == 'Директор' ? message = 'Здравствуйте!' :
  login == '' ? message = 'Нет логина' :
  message = '';

alert(message);

//====================================================================================

// ДВЕНАДЦАТОЕ ЗАДАНИЕ

let apartment = prompt('Введите номер вашей квартиры от 1 до 90, чтобы увидеть в каком подъезде она находится');

if (apartment <= 0) {
  alert('Такой квартиры не существеует')
} else if (apartment <= 20) {
  alert('Эта квартира находится в первом подъезде')
} else if (apartment <= 48) {
  alert('Эта квартира находится во втором подъезде')
} else if (apartment <= 90) {
  alert('Эта квартира находится в третьем подъезде')
} else {
  alert('Такой квартиры не существеует')
}

//====================================================================================

// ТРИНАДЦАТОЕ ЗАДАНИЕ

let browser = prompt('Какой у вас браузер, Edge, Chrome, Firefox, Safari or Opera?');

if (browser == 'Edge') {
  alert("You've got the Edge!")
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
  alert('Okay we support these browsers too')
} else {
  alert('We hope that this page looks ok!')
}

//====================================================================================

// ЧЕТЫРНАДЦАТОЕ ЗАДАНИЕ

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;

  default:
    break;
}