// Задача 1

// Выведите столбец чисел от 1 до 50.

for (let i=1; i<51; i++){
    console.log(i);
}

//  Выведите столбец четных чисел в промежутке от 0 до 100. обратите внимание на то что i  равно итерации цикла 

for (let a=0; a<=100; a++){
    if(a%2==0){
        console.log(a);
    }
}

// Какое последнее значение выведет этот код? Почему?

let b = 3;
while (b) {
  alert( b-- );//3,2,1 потому что постфиксная форма. сохранит 2, но выведет сначала 3
}

// Задача 2

// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выведут alert с одинаковыми значениями или нет?
// Постфиксная форма:
// for (let i = 0; i < 5; i++) alert( i ); 
//здесь выведет 0, 1, 2, 3, 4. Как и в предыдущем примере
// Префиксная форма:
// for (let i = 0; i < 5; ++i) alert( i );
//а здесь 1, 2, 3, 4. Префиксная сразу выводит новое значение

//ошиблась. Для обоих циклов вывело одинаковые ответы

// Задача 3
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл
// другое число – попросить ввести ещё раз, и так далее.

let youNum = prompt('введите число больше 100','');

while(+youNum<=100){
    youNum = prompt('читайте внимательнее, Больше 100. Попробуйте ещё раз','');
}
alert('умничка');

// Задача 4

// Перепишите код с использованием одной конструкции switch:

// const number = +prompt('Введите число между 0 и 3', '');
// if (number === 0) {
//   alert('Вы ввели число 0');
// }
// if (number === 1) {
//   alert('Вы ввели число 1');
// }
// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

const number = +prompt('Введите число между 0 и 3', '');
switch(number){
    case 0:
        alert('Вы ввели число 0');
    break;
    case 1: 
    alert('Вы ввели число 1');
    break;
    case 2||3: 
    alert('Вы ввели число 2, а может и 3');
    break;
    default:
        alert('Надо следовать правилам');
    break;
}
