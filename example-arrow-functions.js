var names = ['A', 'B', 'C'];

// names.forEach((name) => {
//     console.log('arrow function', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Anna'));
//
//
// var person = {
//     name: 'Anna',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// };

// person.greet();

// var add = (a, b) => {
//     return a + b;
// }

// console.log(add(1, 3));

var addExpression = (a, b) => a + b;

console.log(addExpression(3, -2));
