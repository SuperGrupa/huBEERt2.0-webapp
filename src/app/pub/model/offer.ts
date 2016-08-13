import { Beer } from '../../beer/model/beer';

export class Offer {
  id: number;
  beer: Beer.General;
  value: number;
}
