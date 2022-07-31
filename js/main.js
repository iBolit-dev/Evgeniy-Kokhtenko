// 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

const arrFirst = ['a', 'b', 'c'];
const arrNum = [1, 2, 3];
const arrSumm = arrFirst.concat(arrNum);

console.log(arrSumm);





// =============================================

// 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3. (через push и через splice)

const arrAdd = ['a', 'b', 'c'];

arrAdd.push(1, 2)

arrAdd.splice(5, 0, 3);

console.log(arrAdd);





// =============================================

// 3) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

const arrSpliceDel = [1, 2, 3, 4, 5];

arrSpliceDel.splice(1, 2);

console.log(arrSpliceDel);





// =============================================

// 4) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const arrSpliceAdd = [1, 2, 3, 4, 5];

arrSpliceAdd.splice(3, 0, 'a', 'b', 'c');

console.log(arrSpliceAdd);





// =============================================

// 5) Дан массив const arr = [1, 2, 3, 4, 5]. Создать новый пустой массив arr1. Обойти массив arr через цикл for, каждый элемент массива arr умножить на 10 и результат положить в массив arr1.

const arr = [1, 2, 3, 4, 5];
const arr1 = [];

let i;

for (i = 0; i < arr.length; i++) {
  const multiply = arr[i] * 10;
  arr1.push(multiply)

}

console.log(arr1);





// =============================================

// 6) Вывести числа от 4 до 400 на экран.

const arrNumToFour = []

for (i = 4; i < 401; i++) {
  arrNumToFour.push(i);
}

console.log(arrNumToFour);





// =============================================

// 7) Вывести числа в последовательности: 4 7 10 13 с помощью цикла.


const arrNumAddThree = [];

for (i = 4; i < 14; i += 3) {
  arrNumAddThree.push(i);
}

console.log(arrNumAddThree);





// =============================================

// 8) Вывести числа 654 653 652 до нуля.

const arrNumToZero = []

for (i = 654; i >= 0; i--) {
  arrNumToZero.push(i)
}

console.log(arrNumToZero);





// =============================================

// 9) Вывести все годы с 1983 до 2017.


const arrNumToYear = []

for (i = 1983; i < 2018; i++) {
  arrNumToYear.push(i);
}

console.log(arrNumToYear);





// =============================================

// 10) Вывести числа -4 -2 0 2 4 6 ...100.

const arrNumToOneHundr = []

for (i = -4; i < 101; i += 2) {
  arrNumToOneHundr.push(i);
}

// или написать вот так, если надо чтобы i = 0. Оба варианта рабочие

/*
const arrNumToOneHundr = [-4, -2,]

for (i = 0; i < 101; i += 2) {
  arrNumToOneHundr.push(i);
}
*/

console.log(arrNumToOneHundr);


// =============================================

// 11) Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5) 

const arrSummToHndr = [];

let summ = 0;

for (i = 0; i < 101; i++) {
  summ += i;
}
arrSummToHndr.push(summ) // это необязательно, просто чтобы поместить сумму в массив и вывести массив в консоль

console.log(arrSummToHndr);



// =============================================

// 12) Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.

const arrProm = [];

let prom = +prompt('введите длину массива \"x", "xx", "xxx"\ ');

let str = '';

for (i = 0; i < prom; i++) {
  str = str + 'x';
  arrProm.push(str);
}

console.log(arrProm);






// // =============================================

// // 13) Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.


let promp = +prompt('введите длину массива \"1", "22", "333"\ ');

const arrPromNum = [];

let strng;

for (i = 1; i <= promp; i++) {

  strng = '';

  for (let x = 1; x <= i; x++) {
    strng += i;
  }
  arrPromNum.push(strng);
}
console.log(arrPromNum);






// // =============================================

// // 14*) нарисовать матрицу x должны быть по краям, 0 в центре. ( длина и высота матрицы не меньше 10 )
// // ['x', 'x', 'x', 'x', 'x', 'x', 'x']
// // ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// // ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// // ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// // ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// // ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// // ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// // ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// // ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// // ['x', 'x', 'x', 'x', 'x', 'x', 'x']

const arrResult = [];

const arrTop = [];

const arrIn = [];

let strX = 'X';
let str0 = '0';

for (i = 0; i < 10; i++) {
  arrTop.push(strX);

  if (i === 0 || i === 9) {
    arrIn.push(strX),
      arrResult.splice(9, 0, arrTop)
  } else {
    arrIn.push(str0),
      arrResult.splice(1, 0, arrIn)
  }
}

console.log(arrResult);



// // =============================================

// // 15*) нарисовать матрицу (таблица умножения)

const arrMtrxResult = [];

let num;

for (i = 1; i < 11; i++) {
  let arrNmbrs = [];

  for (let j = 1; j < 11; j++) {
    num = i * j;
    arrNmbrs.push(num);
    if (j === 10) {
      arrMtrxResult.splice(9, 0, arrNmbrs)
    }
  }
}

console.log(arrMtrxResult);


// // =============================================
// // 16 * ) Написать программу которая будет склонять слово “товар” в зависимости от количества товаров в корзине. Например 1 - товар, 4 - товара, 6 - товаров.

const arrWords = ['товар', 'товара', 'товаров'];

let prmptProd = +prompt('Введите количество товаров в корзине')

let prodNum = prmptProd % 10;




if (prmptProd > 9 && prmptProd < 21) {
  alert(`У вас в корзине ${prmptProd} ${arrWords[2]}`)
} else if (prodNum === 1) {
  alert(`У вас в корзине ${prmptProd} ${arrWords[0]}`)
} else if (prodNum === 0) {
  alert(`У вас в корзине ${prmptProd} ${arrWords[2]}`)
} else if (prodNum < 5) {
  alert(`У вас в корзине ${prmptProd} ${arrWords[1]}`)
} else if (prodNum >= 5) {
  alert(`У вас в корзине ${prmptProd} ${arrWords[2]}`)
} else {
  alert(`Введите количество ваших товаров в цифрах`)
}