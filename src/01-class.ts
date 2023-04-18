const date = new Date();
date.getDate();
date.getHours();
date.toISOString();

const date2 = new Date(1993, 8, 22);  // 0 es enero 11 es diciembre
date2.getDate();
date2.getHours();
date2.toISOString();

console.log(date);
console.log(date2);

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(1993, 8, 22);
console.log(myDate);