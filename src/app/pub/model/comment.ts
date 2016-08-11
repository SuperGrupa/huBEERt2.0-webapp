export class Comment {
  author: string;
  date: Date;
  text: string;
  rating: number;
  pub: string;

  constructor(author: string) {
    this.author = author;
    this.date = new Date();
    this.text = '';
    this.rating = 3;
  }
}
