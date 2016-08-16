export class FullDate {
  year: number;
  month: number;
  day: number;
  hour: number;

  constructor(date: Date) {
    this.extract(date);
  }

  toString() {
    return new Date(this.year, this.month - 1, this.day, this.hour).toString();
  }

  private extract(date: Date) {
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = date.getDate();
    this.hour = date.getHours();
  }
}
