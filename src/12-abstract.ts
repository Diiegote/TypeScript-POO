import {Animal,Dog} from "./09-protected";

// const animal = new Animal('elite'); // esto no se puede crear porque la clase animal que se encuentra en el archivo 09 es abstract. Esto quiere decir que no te deja crear directamente de la clase animal un nuevo animal, pero si de su hijo como por ejemplo Dog
// animal.greeting();

const cheis = new Dog('cheis','diego');
cheis.greeting();
cheis.woof(2);