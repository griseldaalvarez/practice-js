const s = 'hello world';

console.log(s.length); //output is 11 bcuz there are 11 letters in hello world plus the space

console.log(s.toUpperCase()); //consoles HELLO WORLD

console.log(s.toLowerCase()); //consoles hello world

//SUBSTRINGS BELOW, gets a string w/in a string
console.log(s.substring(0,7)); //consoles only hello w bcuz the h is in 0 index and o is in 7 index but it stops 1 before 7

console.log(s.substring (0, 5).toUpperCase());
//consoles HELLO

