export abstract class Animal {
  constructor(protected name: string) { }  // usamos el protected para poder usar las propiedades de la clase animal internamente pero no se puede utilizar afuera de la clase. La diferencia entre protected y private es que con private no podemos usar la propiedad name en la clase dog, solo nos deja en la clase animal, pero con protected si podemos usar name en cualquier parte de nuestras clases pero no desde afuera

  move() {
    console.log('Moving Along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

   protected doSomething() {
    console.log('dooo')
  }
}
export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }


  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log(`Woof! ${this.name}`);
    }
    this.doSomething();
  }

  move(){
    console.log('moving as a dog');
    super.move();
  }
};

const cheise = new Dog('cheise','Diego');
//cheise.name = 'otro nombre';
cheise.woof(1)
cheise.move()


