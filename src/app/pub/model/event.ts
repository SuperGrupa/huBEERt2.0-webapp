export namespace Event {

  export class General {
    id: number;
    name: string;
    date: Date;
  }

  export class Detail extends General {
    description: string;
  }

}
