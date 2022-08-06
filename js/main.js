// 1) Создать абстрактный класс Human. Обязательные свойства: рост, вес, имя, год рождения(использовать формат Date), пол, наличие инвалидности(boolean). Обязательные методы: приветствие('Привет, меня зовут ИМЯ_ЧЕЛОВЕКА'), возможность смены имени, изменить инвалидность, получить все данные о человеке.


class AbstractHuman {
  constructor(growth, weight, name, dateOfBirth, gender, disability) {
    this.growth = growth;
    this.weight = weight;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.disability = disability;
  }

  sayHello() {
    console.log(`Привет меня зовут ${this.name}`);
  }

  set setNewName(name) {
    this.name = name
  }

  set setNewDisability(disability) {
    this.disability = disability;
  }


  get getInfo() {
    return {
      growth: this.growth,
      weight: this.weight,
      name: this.name,
      dateOfBirth: this.dateOfBirth,
      gender: this.gender,
      disability: this.disability,
    }
  }
}

const human = new AbstractHuman(177, 72, 'Женя', new Date('1997-04-02T02:34:00'), 'male', false);

human.getInfo;

human.sayHello();

human.setNewName = 'Степан Бандера';

human.getInfo;

human.setNewDisability = true;

human.getInfo;



// ===========================================

// 2)Создать два класса(которые должны зависеть от абстракции): -Фронтенд разработчик - Строитель

// class FrontEndDev extends AbstractHuman {
//   constructor() {
//     super();
//   }
// }

// class Builder extends AbstractHuman {
//   constructor() {
//     super();
//   }
// }



// ===========================================

/* 3) Класс Фронтенд разработчик:
	Добавить доп. свойства:
		- начало карьеры(формат Date),
		- предыдущие компании(массив объектов 
			{
				start: new Date(),
				end: new Date(),
				salaryPerMonth: number,
				position: 'middle' или 'junior' или 'senior',
				companyName: 'Oracle',
			})
	Добавить доп. методы:
		- изменить приветствие на 'Привет, меня зовут ИМЯ_ЧЕЛОВЕКА, я Фронтенд разработчик. Работаю с 03.08.2022.(использовать начало карьеры)'.
		- добавить метод, который покажет сколько всего заработал за всю карьеру (использовать массив предыдущие компании,
		высчитать количество отработанных ПОЛНЫХ месяцев в каждой компании умноженный на salaryPerMonth для получения дохода в одной компании,
		в результате должна быть общая сумма со всех компаний(общий доход за всю историю))
		- добавить метод, который позволит используя имя компании показать историю моей работы в ней(вывести объект из массива предыдущие компании по ее имени)
		- возможность добавить компанию в массив предыдущих компаний по примеру объекта выше */

const startDate = new Date('2020-08-05');
const endDate = new Date('2022-02-24');
const diffDateInMonth = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 7 * 4.345));


const prevCompany = [{
    start: startDate,
    end: endDate,
    salaryPerMonth: 20000,
    position: 'middle',
    companyName: 'Oracle',
  },
  {
    start: startDate,
    end: endDate,
    salaryPerMonth: 20,
    position: 'middle',
    companyName: 'Oracle1.0',
  },
  {
    start: startDate,
    end: endDate,
    salaryPerMonth: 0,
    position: 'middle',
    companyName: 'Oracle2.0',
  },
]


class FrontEndDev extends AbstractHuman {
  constructor(growth, weight, name, dateOfBirth, gender, disability, startCareer, prevCompany) {

    super(growth, weight, name, dateOfBirth, gender, disability);

    this.startCareer = startCareer;
    this.prevCompany = prevCompany;
  }

  sayHello() {
    console.log(`Привет меня зовут ${this.name} я Фронтенд разработчик. Работаю с ${this.startCareer}`);
  }

  total(arr) {
    let amount;
    let arrAmount = [];

    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      amount = el.salaryPerMonth * diffDateInMonth;
      arrAmount.push(amount)
    }

    let results = arrAmount.reduce(function (sum, current) {
      return sum + current;
    });
    return results
    // я уверен, что можно всё сделать намного легче и быстрее и всего в пару строчек, но я не знаю как именно:( главно ведь чтобы работало)
  }

  nameCompanyForInfo(nameCompany) {
    for (let i = 0; i < prevCompany.length; i++) {
      const elem = prevCompany[i];
      if (nameCompany === elem.companyName) {
        console.log(elem);
      }
    }
  }


  addNewCompany(nameCompany, startWork, endWork, salaryPerMonth, position) {
    prevCompany.push({
      start: startWork,
      end: endWork,
      salaryPerMonth: salaryPerMonth,
      position: position,
      companyName: nameCompany
    })
  }


  get getInfo() {
    return {
      ...super.getInfo,
      startCareer: this.startCareer,
      prevCompany: this.prevCompany
    }
  }

}

const myFrontEndDev = new FrontEndDev(178, 72, "Женя", new Date('1997-04-04'), 'male', false, new Date('2022-08-05'), prevCompany);

console.log(myFrontEndDev);

console.log(myFrontEndDev.total(prevCompany));

myFrontEndDev.nameCompanyForInfo('Oracle')

myFrontEndDev.addNewCompany('Google', new Date('2007-05-04'), new Date('2008-05-04'), 30000, 'middle')


// ===========================================

/*
 4) Класс Строитель:
   Добавить доп.свойства:
   -локация строительного объекта(строка) -
   набор инструментов(массив строк['кирка', 'топор']) -
   скорость выполнения работы на один квадратный метр(количество минут - number)
 Добавить доп.методы:
   -метод построить дом(принимает в себя количество квадратных метров) - должен показать сколько дней займет постройка дома текущим мастером
 если меньше одного дня - показать количество часов 
 если больше одного дня - показать количество дней и часов 
 если больше недели - показать количество недель дней и часов 
 если больше месяца - показать количество месяцев недель дней и часов
 если больше года - показать количество лет месяцев недель дней и часов
*/

const toolkit = ['кирка', 'топор'];




class Builder extends AbstractHuman {
  constructor(growth, weight, name, dateOfBirth, gender, disability, locationСonstrProj, toolkit, speedWorkPerSquareMeterInMin) {
    super(growth, weight, name, dateOfBirth, gender, disability);

    this.locationСonstrProj = locationСonstrProj,
      this.toolkit = toolkit,
      this.speedWorkPerSquareMeterInMin = speedWorkPerSquareMeterInMin
  }


  buildHouse (squareMeterage) {
    const resultOfBuild = squareMeterage * this.speedWorkPerSquareMeterInMin;
    if (resultOfBuild < 1440) {
      console.log(`Строительство займёт приблизительно ${Math.floor(resultOfBuild / 60)} час(а)(ов)`);
    } else if (resultOfBuild < 10080) {
      console.log(`Строительство займёт приблизительно ${Math.floor(resultOfBuild / 60 / 24)} дней и ${Math.floor(resultOfBuild % 1440 / 60)} часов`);
    } else if (resultOfBuild < 43800) {
      console.log(`Строительство займёт приблизительно ${Math.floor(resultOfBuild / 60 / 24 / 7)} недели, ${Math.floor(resultOfBuild % 10080 / 60 / 24)} дней и ${Math.floor(resultOfBuild % 1440 / 60)} часов `);
    } else if (resultOfBuild < 525600) {
      console.log(`Строительство займёт приблизительно ${Math.floor(resultOfBuild / 60 / 24 / 7 / 4.345)} месяцев ${Math.floor(resultOfBuild % 43800 / 60 / 24 / 7)} недели, ${Math.floor(resultOfBuild % 10080 / 60 / 24)} дней и ${Math.floor(resultOfBuild % 1440 / 60)} часов `);
    } else {
      console.log(`Строительство займёт приблизительно ${Math.floor(resultOfBuild / 60 / 24 / 7 / 4.345 / 12)} год, ${Math.floor(resultOfBuild % 525600 / 60 / 24 / 7 / 4.345)} месяцев ${Math.floor(resultOfBuild % 43800 / 60 / 24 / 7)} недели, ${Math.floor(resultOfBuild % 10080 / 60 / 24)} дней и ${Math.floor(resultOfBuild % 1440 / 60)} часов `);
    }
  }

  // Да да да, я знаю что здесь тоже можно было сделать не так сложно и запутанно, главное ведь результат))
}


const myBuilder = new Builder(164, 85, 'Степан', new Date('1981-02-01'), 'male', false, 'Kharkiv', toolkit, 20)

console.log(myBuilder);

myBuilder.buildHouse(125030);