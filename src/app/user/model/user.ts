import { Token } from './token';
import { City }  from '../../search/model/city';

export namespace User {

  export class Registering {
    email: string;
    login: string;
    password: string;
  }

  export class Logging {
    login: string;
    password: string;
  }

  export class Logged {
    id: number;
    login: string;
    token: Token;
  }

  export class General {
    id: number;
    login: string;
    email: string;
    city: City;
    comments: number;
    subscriptions: number;
    notifications: number;
  }

  export class Updating {
    login: string;
    email: string;
    city_id: number;

    constructor(user: User.General) {
      this.login = user.login;
      this.email = user.email;
      this.city_id = user.city.id;
    }
  }

}
