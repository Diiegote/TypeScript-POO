import {Dog} from './09-protected';


function getValue<myType>(value: myType) {
  const array: myType[] = [value];
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLocaleLowerCase();
getValue<number[]>([]).forEach;

const fifi = new Dog('fifi','diego');
getValue<Dog>(fifi).greeting;