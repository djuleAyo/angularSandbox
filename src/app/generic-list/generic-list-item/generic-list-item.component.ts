import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Professor } from '../../professor/professor.model';


@Component({
  selector: 'app-generic-list-item',
  templateUrl: './generic-list-item.component.html',
  styleUrls: ['./generic-list-item.component.scss']
})
export class GenericListItemComponent implements OnInit {

  @Input() element: any;
  @Input() isSelected = false;

  constructor() {}

  ngOnInit() {
    if (!this.element) {
      throw new Error(`No element was given in generic list item`);
    }
  }

  getElementType(): string {
    return this.element.constructor.name;
  }

}
