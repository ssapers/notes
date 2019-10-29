# Основы по Javascript

## Итерации массивов

* Код ниже получает из массива строк новый массив, содержащий их длины:
Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.

```javascript
var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
    arrLength[i] = arr[i].length;
}
alert(arrLength); // 4,5,2,5
```

```javascript
const arr = ["Есть", "жизнь", "на", "Марсе"];

const arrLength = arr.map(function(str) {
    return str.length;
});

console.log(arrLength);
```

* На входе массив чисел, например: arr = [1,2,3,4,5].
Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
То есть:

```javascript
const arr = [1,2,3,4,5];

function getSums(arr) {
    const result = [];
    const summary = arr.reduce(function(sum, current) {
        result.push(sum);
        return sum + current;
    });
    
    return result;
}

console.log(getSums(arr));
```

## Методы массивов

* В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

```javascript
const obj = {
    className: 'open menu'
};

function addClass(obj,str) {
    const arr = obj.className.split(' ');
    if(arr.indexOf(str) === -1) {
        arr.push(str);
    }
    obj.className = arr.join(' ')
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

console.log(obj.className);
```

* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть, дефисы удаляются, а все слова после них получают заглавную букву.

```javascript
function camelize(str) {
    const arr = str.split('-');
    for(let i = 1; arr.length > i; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}


console.log('first-test: ' + camelize('background-color'));
console.log('second-test: ' + camelize('list-style-image'));
console.log('third-test: ' + camelize('-webkit-transition'));
```

* У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

```javascript
const obj = {
    className: 'open menu'
};

function removeClass(obj,str) {
    const className = obj.className.split(' ');

    for(let i = 0; className.length > i; i++) {
        if(className[i] === str) className.splice(i,1);
    }

    return obj.className = className.join(' ')
}

removeClass(obj, 'new'); // obj.className='open menu new'
removeClass(obj, 'open'); // без изменений (класс уже существует)
removeClass(obj, 'me'); // obj.className='open menu new me'

console.log(obj.className);
```

* Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него все
числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна менять сам массив и ничего не возвращать.

```javascript
const arr = [5, 3, 8, 1];

function filterRangeInPlace(arr,a,b) {
    for(let i = 0; i < arr.length; i++){
        if(a <= arr[i] && b <= arr[i]) arr.splice(i,1)
    }

}

filterRangeInPlace(arr, 1, 4);

console.log(arr);
```

* Создать функцию сортировки
```javascript
const arr = [5, 2, 1, -10, 8];

function reverse(a, b) {
    return b - a;
}

arr.sort(reverse);
console.log(arr);
```

* Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
Исходный массив не должен меняться.

```javascript
const arr = ["HTML", "JavaScript", "CSS"];
const arrSorted = arr.concat().sort();

console.log(arrSorted); // CSS, HTML, JavaScript
console.log(arr);
```

* Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.

```javascript
const arr = [1, 2, 3, 4, 5];
arr.sort( () => Math.floor(Math.random() * arr.length));
console.log(arr);
```

* Напишите код, который отсортирует массив объектов people по полю age.

```javascript
const vasya = { name: "Вася", age: 23 };
const masha = { name: "Маша", age: 18 };
const vovochka = { name: "Вовочка", age: 6 };

const people = [ vasya , masha , vovochka ];

people.sort(function(a, b) {
    return a.age - b.age;
});


// теперь people: [vovochka, masha, vasya]
console.log(people[0].age);
```

* Задача с циклами
  - Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
  - Напишите функцию printList(list) при помощи рекурсии.
  - Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
  - Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
  - Как лучше – с рекурсией или без?

```javascript
const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    while (list) {
        console.log(list.value);
        list = list.next;
    }
}

function printList(list) {

    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }


}

function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }
    console.log(list.value);
}

function printReverseList(list) {
    const arr = [];

    while (list) {
        arr.push(list.value);
        list = list.next;
    }

    for(let i = arr.length-1; i !==0 ; i--){
        console.log(arr[i]);
    }

}

printReverseList(list);
printList(list);
```

* Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

```javascript
function unique(arr) {
    let uniqueItems = new Set();
    for (let i = 0; arr.length > i; i++) {
        uniqueItems = uniqueItems.add(arr[i]);
    }
    return Array.from(uniqueItems);

}

const strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

console.log(unique(strings));
```

## Работа с массивами 

* Как получить последний элемент из произвольного массива?
У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
Напишите код для получения последнего элемента goods.

```javascript
const array = [1,2,3,4,5,6,7,8,10];
console.log(array[array.length-1]);
```

* Как добавить элемент в конец произвольного массива?
У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».

```javascript
const array = [1,2,3,4,5,6,7,8,10];
array.push('Computer');
console.log(array);
```

* Задача из 5 шагов-строк:
  - Создайте массив styles с элементами «Джаз», «Блюз».
  - Добавьте в конец значение «Рок-н-Ролл»
  - Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
  - Удалите первое значение массива и выведите его alert.
  - Добавьте в начало значения «Рэп» и «Регги».
  - Массив в результате каждого шага:

```javascript
const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles[styles.length-2] = 'Классика';
styles.shift();
styles.unshift('Рэп','Регги');
console.log(styles);
```

* Напишите код для вывода alert случайного значения из массива: <br> var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];<br> P.S. Код для генерации случайного целого от min to max включительно:
    var rand = min + Math.floor(Math.random() * (max + 1 - min));
    
```javascript
const arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
const rand = Math.floor(Math.random() * arr.length);
console.log(arr[rand]);
```

* Напишите код, который:
  - Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
  - Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
  - При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
  - Выводит сумму всех значений массива*/
```javascript
const array = [];

while (true) {
    const question = prompt("Введите число", 0);
    if (question === "" || question === null || isNaN(question)) break;
    array.push(Number(question));
}

const result = array.reduce(function(sum, current) {
    return sum + current;
});
console.log(result);
```

* Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.
```javascript
const arr = ["test", 2, 1.5, false];

function find(arr,str) {
  for(let i = 0; arr.length > i; i++) {
      if(arr[i] === str) return i;
  }
  return -1;
}

console.log(find(arr, "test")); // 0
console.log(find(arr, 2)); // 1
console.log(find(arr, 1.5)); // 2
console.log(find(arr, 0)); // -1
```

* Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив,
который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция не должна менять arr.
```javascript
const arr = [5, 4, 3, 8, 0];

function filterRange(arr, a, b) {
    const result = [];
    for(let i = 0; i < arr.length; i++){
        if(a <= arr[i] && b >= arr[i]) result.push(arr[i])
    }
    return result;
}

console.log(filterRange(arr, 3, 5));
```

## Другие задачи

* Отсортируйте массив по возрасту пользователей от меньшего к большему.

```javascript
const users = require('./data.js');

users.sort(function(a, b) {
    return a.age - b.age;
});

console.log(users);
```

* Создайте массив, содержащий только имена пользователей.

```javascript
const users = require('./data.js');

const names = users.map(function(users) {
    return users.name;
});

console.log(names);
```

* Создайте массив, содержащий только имена пользователей.
```javascript
const users = require('./data.js');

const names = users.map(function(users) {
    return users.name;
});

console.log(names);
```

* Создайте массив, содержащий только совершеннолетних пользователей.
```javascript
  const users = require('./data.js');
  
  const adults = users.filter(function(users) {
      return users.age >= 18;
  });
  
  console.log(adults);
```

```javascript
const users = require('./data.js');

//Найдите самого старшего.

users.sort(function(a, b) {
    return a.age - b.age;
});

console.log(users.reduce((a, b) => a.age > b.age ? a.age : b.age));


// Посчитайте средний возраст.

const initialValue = 0;
let averageAge = users.reduce(
    (accumulator, currentValue) => accumulator + currentValue.age,
    initialValue
);
averageAge = averageAge / users.length;
console.log(averageAge);


// Сгруппируйте пользователей по возрасту.

const usersAge = {};
users.forEach(function(user) {
    let ageData = usersAge[user.age];

    if (ageData) {
        ageData.push(user);
    } else {
        usersAge[user.age] = [user];
    }
});

console.log(usersAge);

// Найдите средний рейт для каждого возраста.

const averageRate = {};

for (let age in usersAge) {
    averageRate[age] = usersAge[age].reduce((acc, user) => acc + user.rate, 0) / usersAge[age].length;
}

console.log(averageRate);


// Найдите максимальный из всех средних рейтов по возрастам.

let maxRate = 0;

for(let rate in averageRate) {
    maxRate = Math.max(maxRate, averageRate[rate])
}

console.log(maxRate);
```