const person = {
    firstName: 'griselda',
    lastName: 'alvarez',
    age: 36,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main street',
        city: 'Fowler',
        state: 'CA'
    }
    
}

console.log(person); //consoles everthing from above

console.log(person.firstName);  //consoles only the first name: griselda

console.log(person.firstName, person.lastName);  //consoles first and last name: griselda alvarez

console.log(person.hobbies[1]); //consoles: movies

console.log(person.address.city); //consoles: fowler

person.phoneNumber = 5301234567;
console.log(person);//adds a phone number to the const person object literal

34.14 left off