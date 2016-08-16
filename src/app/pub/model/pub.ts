import { City } from '../../search/model/city';

export namespace Pub {

  // Pojedynczy wpis na liście wyników wyszukiwania
  export class General {
    id: number;
    name: string;
    rating: number;
    comments: number;
    address: string;
  }

  // Strona główna pubu
  export class Detail extends General {
    description: string;
    email: string;
    phone: string;
    city: City;
    events: number;
    offers: number;
  }

  // Lista wyników wyszukiwania
  export class List {
    pubs: Pub.General[];
    total_pubs: number;
  }

  // Wpis w zakładce "subskrypcje" na stronie /home usera
  export class Subscription {
    id: number;
    name: string;
    address: string;
    city: string;
  }

}
