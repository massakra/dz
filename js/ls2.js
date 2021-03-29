// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let numbers =  [1,2,3,4,5]
// let srting = ['like','honey','unpack','examine','organic']
// let mix = ['like',true,'unpack',6,8]
//
//
// console.log(numbers)
// console.log(srting)
// console.log(mix)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let empty = []
//
// empty[0] = 1
// empty[1] = 145
// empty[2] = true
// empty[3] = 'cruel'
//
// console.log(empty)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i=0; i<10; i++){
//
// document.write('<div>system</div>')
//
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write('<div>system</div>' + i)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0
// while (i<10){
//     document.write('<h1>system</h1>')
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0
// while (i<10){
//     document.write('<h1>system</h1>' + i)
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr = [34,2,19,4,5,6,124,8,9,41]
// for (let number of arr) {
//     console.log(number)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let strings = ['name','automatic','nervous','apologise','famous','bomb','ceaseless','visitor','vulgar','rabbit']
// for (const arrayElement of strings) {
// console.log(arrayElement)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let strings = ['name',2,'nervous',156,'famous',true,'ceaseless',145.2,'vulgar','rabbit']
//
// let i = 0
// while (i<strings.length){
//     console.log(strings[i])
//     i++
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// let mix = ['name', 2, 'nervous', 156, 'famous', true, 'ceaseless', 145.2, 'vulgar', 'rabbit']
//
// for (let bul of mix) {
//     if (typeof bul === 'boolean') {
//         console.log(bul)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// let mix = ['name', 2, 'nervous', 156, 'famous', true, 'ceaseless', 145.2, 'vulgar', 'rabbit']
//
// for (let bul of mix) {
//     if (typeof bul === 'number') {
//         console.log(bul)
//     }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let mix = ['name', 2, 'nervous', 156, 'famous', true, 'ceaseless', 145.2, 'vulgar', 'rabbit']
//
// for (let bul of mix) {
//     if (typeof bul === 'string') {
//         console.log(bul)
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// let empty = []
//
// empty[0] = 514.2
// empty[1] = 'waste'
// empty[2] = 'reflective'
// empty[3] = 514.2
// empty[4] = 'mundane'
// empty[5] = 'scribble'
// empty[6] = true
// empty[7] = 'useless'
// empty[8] = false
// empty[9] = 'probable'
//
// for (const emptyElement of empty) {
//     console.log(emptyElement)
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (i = 0; i < 10; i++) {
//     console.log(i)
//     document.write(i)
//     document.write('<br>')
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (i = 0; i < 100; i++) {
//     console.log(i)
//     document.write(i)
//     document.write('<br>')
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (i = 0; i < 100; i = i + 2) {
//     console.log(i)
//     document.write(i)
//     document.write('<br>')
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (i = 0; i < 100; i++) {
//     console.log(i)
//     document.write(i)
//     document.write('<br>')
//     i++
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (i = 2; i < 100; i++) {
//     i--
//     console.log(i)
//     document.write(i)
//     document.write('<br>')
//     i+=2
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
// for (let m = 0; m<2;m++){
//     for (let s = 0;s<60;s++){
//         document.write(`${m} хв ${s} сек`)
//         document.write('<br>')
//     }
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

for (let h = 0; h < 3; h++) {
    for (let m = 0; m < 60; m++) {
            if ( m===20 ){
                break
            }
             for (let s = 0; s < 60; s++){
                 document.write(`${h}г ${m}х ${s}с`)
                 document.write('<br>')
             }
        }
    }