export namespace Beer {

  export class General {
    id: number;
    name: string;
    volume: number;

    constructor() { }
  }

  export class Detail extends General {
    description: string;
    alcohol: string;
    extract: number;
  }

}
