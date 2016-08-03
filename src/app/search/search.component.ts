import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { City } from './model/city';
import { CityService } from './service/city.service';

@Component({
  selector: 'search',
  styles: [require('./search.component.scss')],
  template: require('./search.component.html'),
  providers: [CityService],
})

export class SearchComponent implements OnInit {
  error_message: string;
  query: String = "";
  cities: City[];
  selected_city: string = "Poznań";

  constructor (private router: Router,
               private cityService: CityService) { }

  search() {
    this.router.navigate(['/results', { city: this.selected_city, page: 1, q: this.query }]);
  }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.cityService.getCities().subscribe(
      data => this.cities = data,
      error => this.error_message = <any>error
    );
  }
}
