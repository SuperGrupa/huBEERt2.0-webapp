import { Beer } from '../../beer/model/beer';

export class Offer {
  id: number;
  beer: Beer.General;
  value: number;

  constructor(value: number = 5.0) {
    this.value = value;
    this.beer = new Beer.General();
  }
}
