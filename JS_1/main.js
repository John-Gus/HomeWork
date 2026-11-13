// Задача 1.
// Создайте переменные с корректными именами, чтобы сохранить следующую информацию:
// 1. firstName – имя (строка)
// 2. lastName – фамилия (строка)
// 3. isStudent – является ли учеником курса (булево значение)

// Если меняются в процесе
// let firstName = "Иван";
// let lastName = "Иванов";

// // Либо объявлем константами
// const FIRST_NAME = "Иван";
// const LAST_NAME = "Иванов";

// // Булево значение
// isStudent = true;
// // Либо fakse
// isStudent = true;

// Задача 2.
// 1. Объявите переменную age с числовым значением возраста студента.
// 2. Объявите переменную currentYear и присвойте ей значение текущего года (например, 2025).
// 3. Используя age и currentYear вычислите год рождения студента, запишите результат в переменную birthYear.

// let age = 21;
// let currentYear = 2026;

// let birthYear = currentYear - age;

// console.log(birthYear);

// Задача 3.
// Выведите в консоли сообщение в таком формате:
// Меня зовут [firstName] [lastName], мне [age] лет. Я ученик/ученица курса: [isStudent].

let firstName = "Иван";
let lastName = "Иванов";
let age = 20;
let isStudent = true;
console.log(
  `Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик: ${isStudent}`,
);

// Задача 4.
// Какое значение будет у переменной result?
let a = "123"; // строка
let b = +"456"; // строка
let c = Number("789"); // число
let d = Boolean(0); // false
let e = Boolean(" "); // true
let result = a + b + c + d + e; // На уроке говорили что если к строке прибавить что-либо, то тип станет строкой. Значить результат будет выведен одной строкой: 123456789falsetrue
// Проверка:
console.log(result); // Вывод 123456789falsetrue
