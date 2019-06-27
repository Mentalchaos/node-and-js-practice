let pokemon = {
    name: 'Pikachu',
    hp: 100,
    getNombre: function() {
        return `This pokemon name is ${this.name} and it has ${this.hp} hp`;
    }
}

let { name: nombre, hp: vida } = pokemon;

console.log(nombre = 'raichu', vida = 150);