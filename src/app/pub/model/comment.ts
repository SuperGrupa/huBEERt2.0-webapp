export namespace Comment {

  export class General {
    author: string;
    date: Date;
    text: string;
    rating: number;
    pub: string;
  }

  export class New {
    text: string = '';
    rating: number = 3;
    user_id: number;
    pub_id: number;

    constructor(user_id, pub_id) {
      this.user_id = user_id;
      this.pub_id = pub_id;
    }
  }

}
