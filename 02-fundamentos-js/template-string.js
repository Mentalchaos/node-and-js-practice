let name = 'Jean';
let nick = 'MentalChaos';

//console.log(`My name is ${name} and my nickname is ${nick}`);

myName = (name, nick) => {
    let data = `My name is ${name} and my nickname is ${nick}`
    return data;
}

const data = myName('Jean', 'Mentalchaos');
console.log(data);