export class Animal {
  constructor(public name: string) { }

  move() {
    console.log('Moving Along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
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
      console.log("Woof!")
    }
  }
};

const fifi = new Animal('Fifi');
fifi.move();
console.log(fifi.greeting());

const cheise = new Dog('cheise','Diego');
cheise.move();
console.log(cheise.greeting());
cheise.woof(7)
console.log(cheise.owner);