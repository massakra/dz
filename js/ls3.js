// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

//     a) отримує текст з параграфа з id "content"
//
// let text = document.getElementById("content")
// console.log(text);

//     b) отримує текст з блоку з id "rules"
//
// let textB = document.getElementById("rules")
// console.log(textB);

//     c) замініть текст параграфа з id 'content' на будь-який інший
//
// text.innerText = ' Dolorem itaque magnam reprehenderit sequi unde. Assumenda at consectetur explicabo illo inventore sapiente.'

//     d) замініть текст параграфа з id 'rules' на будь-який інший
//
// textB.innerText = 'Lorem ipsum dolor sit amet.'

//     e) змініть кожному елементу колір фону на червоний
//
// text.style.backgroundColor = '#e53232'
// textB.style.backgroundColor = '#e53232'
// for (let i = 0; i < textC.length; i++) {
//     textC[i].style.backgroundColor = '#e53232'
// }

//     f) змініть кожному елементу колір тексту на синій
//
// text.style.color = '#0b6ba9'
// textB.style.color = '#0b6ba9'
// for (let i = 0; i < textC.length; i++) {
//     textC[i].style.color = '#0b6ba9'
// }

//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// let textRules = document.getElementById("rules")
// console.log(textRules.classList);

//     h) отримати всі елементи з класом fc_rules
//
// let fcRules = document.getElementsByClassName('fc_rules')

//     i) поміняти колір тексту у всіх елементів fc_rules на червоний
//
// for (let i = 0; i < fcRules.length; i++) {
//     fcRules[i].style.backgroundColor = '#e53232'
// }

 // За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
 //   Вставити цей блок на сторінку
//
// let users = [{
//   name: 'vasya',
//   age: 31,
//   status: false,
//   address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//   name: 'petya',
//   age: 30,
//   status: true,
//   address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//   name: 'kolya',
//   age: 29,
//   status: true,
//   address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//   name: 'olya',
//   age: 28,
//   status: false,
//   address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//   name: 'max',
//   age: 30,
//   status: true,
//   address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//   name: 'anya',
//   age: 31,
//   status: false,
//   address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//   name: 'oleg',
//   age: 28,
//   status: false,
//   address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//   name: 'andrey',
//   age: 29,
//   status: true,
//   address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//   name: 'masha',
//   age: 30,
//   status: true,
//   address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//   name: 'olya',
//   age: 31,
//   status: false,
//   address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//   name: 'max',
//   age: 31,
//   status: true,
//   address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];
//
// for (let i = 0; i < users.length; i++) {
//     const user = document.createElement('div')
//     document.body.appendChild(user)
//     document.write(user)
// }



