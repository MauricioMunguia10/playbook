//Creamos la clase Pokemon
export default class MyPokemon {
    constructor (name) {
        this.name = name 
    }

    sayHello (messsage) {
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }

}