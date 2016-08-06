import { Token } from './token';

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

}
