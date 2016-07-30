import { Component } from '@angular/core';

@Component({
  selector: 'pub-show',
  template: require('./show.component.html'),
  styles: [require('./show.component.scss')],
})

export class PubShowComponent {
  pub = {
    rating: 3.8,
    name: "U Szwagra",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget facilisis libero. Phasellus ac arcu felis. Vivamus vel vehicula massa, eget facilisis mi. Suspendisse elit magna, suscipit ut ultrices quis, gravida eu ligula. Morbi nibh lectus, suscipit in egestas ut, ultricies eu diam. Sed cursus ante eu pharetra elementum. Donec nec eros vel lacus porttitor eleifend. Nulla facilisi. Nam vitae bibendum est, eu bibendum leo. Sed quis est maximus, maximus massa rutrum, blandit nulla. Donec porta vestibulum turpis et tempus. Praesent ultrices rutrum odio a mollis.",
    address: "Poznań ul. Żydowska 55",
    email: "pub@szwagier.pl",
    phone: 123456789
  };
  section: string = 'offer';
}
