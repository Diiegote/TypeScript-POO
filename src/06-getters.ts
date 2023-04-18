export class MyDate {

  constructor(
    public year: number = 1993,
    private _month: number = 9,
    private _day: number = 22  // mayormente a las propiedades privadas se las declara con un (_) como _day
  ) { }
  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }
  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
  get day() {
    return this._day;   // la palabra recervada get hace que el metodo day() por fuera se vea como una propiedad mas y no como un metodo.
  }

  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

}

const myDate = new MyDate();
console.log(myDate.printFormat());
console.log(myDate.day) // de esta manera estamos ejecutando ese metodo sin usar los parentesis
console.log(myDate.isLeapYear) // lo mismo para el metodo isLeapYear

const myDate2 = new MyDate(2000, 8, 10);
console.log('2000',myDate2.isLeapYear)

const myDate3 = new MyDate(2001, 8, 10);
console.log('2001',myDate3.isLeapYear)

const myDate4 = new MyDate(2004, 8, 10);
console.log('2004',myDate4.isLeapYear)