export namespace Pub {

  export class General {
    id: number;
    name: string;
    rating: number;
    comments: number;
    address: string;
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

  export class Subscription {
    id: number;
    name: string;
    address: string;
    city: string;
  }

}
