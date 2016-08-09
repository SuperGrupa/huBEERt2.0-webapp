import { Token }   from './token';
import { Comment } from '../../pub/model/comment';

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
    comments: number;
    subscriptions: number;
    notifications: number;
  }

}
