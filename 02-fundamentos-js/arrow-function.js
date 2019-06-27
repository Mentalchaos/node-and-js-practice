// function sumar(n1, n2) {
//     return n1 + n2;
// }

// const data = sumar(10, 20);
// console.log(data);

// const sum = (n1, n2) => n1 + n2;
// console.log(sum(20, 25));

let pokemon = {
    name: 'Pikachu',
    hp: 100,
    getNombre() {
        return `This pokemon name is ${this.name} and it has ${this.hp} hp`;
    }
}

const data = pokemon.getNombre();

console.log(data);