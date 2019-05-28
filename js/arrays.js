//arrays - variable that hold multiple values

const fruits = ['apples', 'oranges', 'pears'];

fruits.push('grapes'); //adds grapes to the end of the above array apples, oranges, pears, grapes

fruits.unshift('strawberries'); //adds 'strawberries' to the beginning of the array

fruits.pop(); //pops or removes the last fruit in the array which is grapes

console.log(Array.isArray(fruits)); //this is to check if fruits is an array; will console log 'true'

console.log(fruits.indexOf('oranges'));//gives you the index of oranges; will console 2 (strawberries, apples, oranges)

console.log(fruits); //consoles all the fruits

console.log(fruits[1]); //consoles only 'oranges'






