// 1е Задание
// Написать функцию которая первым принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив['x', 'x', 'x', 'x', 'x'].




function arrayFill(a, b) {
  let arr = [];
  for (i = 0; i < b; i++) {
    arr.push(a);
  }
  return arr;
}

console.log(arrayFill('x', 4));

// ===============================

// 2е Задание
// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.


function isNumberInRange(a) {

  if (a > 0 && a < 10) {
    return true
  } else {
    return false
  }
}

console.log(isNumberInRange(3));

// ===============================





// 3е Задание
// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

function isEven(a) {
  let even = a % 2;
  if (even === 0) {
    return true
  } else {
    return false
  }
}

console.log(isEven(54));

// ===============================




// 4е Задание
// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.Для этого используйте вспомогательную функцию isEven из предыдущей задачи. 

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 45, 15, 12, 11, 12, 16, 14, 19, 18, 17];


const filteredMyArr = myArr.filter((el) => {
  return isEven(el)
})

console.log(filteredMyArr);


// ===============================

// 5е Задание
// Создайте функцию, которая получает два параметра – число и степень числа. Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.

function degree(a, b) {
  let result = a ** b;
  // console.log(result);
  return result
}

console.log(degree(2, 3));




// ===============================

// 6е Задание
// Функция принимает параметр - возраст пользователя. Если число больше 16 – то выводим« добро пожаловать», если меньше–“ вы еще молоды”.



function userAge(age) {
  if (age > 16) {
    console.log('Добро пожаловать');
  } else {
    console.log('Вы ещё молоды');
  }
}

userAge(25)





// ===============================

// 7е Задание
// Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию. В таком случае выведите сообщение–“ Введите возраст”. Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор || .


function userAgeModify(age) {
  if (typeof age === 'undefined' || typeof age === 'string') {
    console.log('Введите возраст');
  } else if (age <= 16) {
    console.log('Вы ещё молоды');
  } else if (age > 16) {
    console.log('Добро пожаловать');
  }
}

userAgeModify(25)








// ===============================

// 8е Задание
// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой. 

let str = 'lorem ipsum dolor sit amet consectetur'

function upperCaseFirst(str) {
  return str[0].toUpperCase(str) + str.slice(1)
}

console.log(upperCaseFirst(str));




// ===============================

// 9е Задание
// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'. ( с помощью функции, которая принимает строку)

let myStr = 'var_text_hello';

function lowerCamelCase(str) {
  let arrStr = str.split('_');

  let newMyArr = [];

  for (let i = 1; i < arrStr.length; i++) {
    let el = arrStr[i];
    let upperCase = upperCaseFirst(el)
    newMyArr.push(upperCase)
  }

  let transfToStr = newMyArr.join('')

  arrStr.splice(1, 10000000000, transfToStr)

  let finalResult = arrStr.join('')
  return finalResult
}

console.log(lowerCamelCase(myStr));

// ===============================






// 10е Задание
// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.Функция должна возвращать true или false.

const test = ['первый', 'проверочный', 'массив']
const test1 = ['второй', 'проверочный', 'массив']
const test2 = ['третий', 'проверочный', 'массив']



function inArray(text, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === text) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(inArray('третий', test2));