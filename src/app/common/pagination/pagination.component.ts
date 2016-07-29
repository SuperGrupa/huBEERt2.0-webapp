import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  template: require('./pagination.component.html'),
  styles: [require('./pagination.component.scss')],
})

export class Pagination implements OnChanges {
  @Input() total_items: number;
  @Input() items_per_page: number;
  @Input() current_page: number;
  @Output() on_click = new EventEmitter();

  pages_count: number;

  ngOnChanges() {
    if (this.total_items && this.items_per_page) {
      this.pages_count = Math.floor(this.total_items / this.items_per_page) + 1;
    }
  }

  clicked(page_number: number) {
    this.on_click.next(page_number);
  }

  previous() {
    if (this.current_page > 1) {
      this.on_click.next(this.current_page - 1);
    }
  }

  next() {
    if (this.current_page < this.pages_count) {
      this.on_click.next(this.current_page + 1);
    }
  }
}
