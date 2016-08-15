export class FullDate {
  // year: number;
  // month: number;
  // day: number;

  constructor(public year: number, public month: number, public day: number) { }

  toDate() {
    return new Date(this.year, this.month, this.day);
  }
}
