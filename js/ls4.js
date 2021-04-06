// 1) створити функцію яка приймає масив та виводить його
//
// let arr = [4,54,'gspd']
//
// function arrWrite(arr) {
//     console.log(arr);
// }
//
// arrWrite(arr);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
//
// function arrWriteRandom(lenght){
//     let randomArr = []
//     for (let i = 0; i < lenght; i++) {
//         randomArr.push(Math.random());
//
//     }
//     console.log(randomArr);
//     return randomArr
// }
//
//
//  arrWriteRandom(100)

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function minNum(a,b,c){
//  if (a<=b && a<=c){min = a}
//  if (b<=a && b<=c){min = b}
//  if (c<=b && c<=a){min = c}
//     console.log(min);
//  return min
// }
// maxNum(34,31,51)

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function maxNum(a,b,c){
//  if (a>=b && a>=c){min = a}
//  if (b>=a && b>=c){min = b}
//  if (c>=b && c>=a){min = c}
//     console.log(min);
//  return min
// }
// maxNum(34,31,51)

// 5) створити функцію яка повертає найбільше число з масиву
//
// function returnMax(randArr = []) {
//     let max = randArr[0]
//     for (let i = 0; i < randArr.length; i++) {
//         if (randArr[i] > max) {
//             max = randArr[i]
//         }
//     }
//     return max
// }
//
// const max = returnMax([34, 56, 12])
// console.log(max)

// 6) створити функцію яка повертає найменьше число з масиву
//
// function returnMin(randArr = []) {
//     let min = randArr[0]
//     for (let i = 0; i < randArr.length; i++) {
//         if (randArr[i] < min) {
//             min = randArr[i]
//         }
//     }
//     return min
// }
//
// const min = returnMin([34, 56, 12])
// console.log(min)

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//
// function sum(arr = []){
//     let arrSum = 0
//     for (let i = 0; i < arr.length; i++) {
// arrSum +=arr[i]
//     }
//     console.log(arrSum);
//     return arrSum
// }
//
// sum([2,1,22])

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function aref(arr = []) {
//     let arefNum = null
//
//     for (let i = 0; i < arr.length; i++) {
//         arefNum += arr[i]
//     }
//     let ser = arefNum / arr.length
//     console.log(ser);
//     return ser
// }
//
// aref([13, 3, 11])

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//
// function keys(arr=[{}]){
//     let ki = []
//     for (let i = 0; i < arr.length; i++) {
//         ki.push(Object.keys(arr[i]))
//     }
// console.log(ki)
// }
// keys([{name: 'Dima', age: 13}, {model: 'Camry'}])

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//
// function keys(arr=[{}]){
//     let ki = []
//     for (let i = 0; i < arr.length; i++) {
//         ki.push(Object.values(arr[i]))
//     }
// console.log(ki)
// }
// keys([{name: 'Dima', age: 13}, {model: 'Camry'}])

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//
// function sumIn(arr1=[],arr2 =[]){
//     let sumOfArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         sumOfArr.push(arr1[i]+arr2[i])
//     }
//     console.log(sumOfArr);
//     return sumOfArr
// }
//
// sumIn([1,2,4,5],[4,23,4,5])


