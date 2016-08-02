export namespace Pub {

  export class General {
    id: number;
    name: string;
    rating: number;
    comments: number;
  }

  export class Detail extends General {
    description: string;
    address: string;
    email: string;
    phone: string;
    events: number;
  }

  export class List {
    pubs: Pub.General[];
    total_pubs: number;
  }

}
