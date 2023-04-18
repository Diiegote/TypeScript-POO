export class MyDate {


  constructor(
    public year: number = 1993,
    public month: number = 9,
    private day: number = 22
  ) { }
  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
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
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
  getDay() {
    return this.day;
  }
}

const myDate = new MyDate();
console.log(myDate.printFormat());
const myDate2 = new MyDate(2016,8,10);
console.log(myDate2.printFormat());

