import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent implements OnInit {

  @Input() array: Array<any>;

  // Events --------------------------------------------------------------------

  @Output() elementSelect: EventEmitter<any> = new EventEmitter<any>();

  // ~Events -------------------------------------------------------------------

  // Controls ------------------------------------------------------------------
  @Input() selectable = true;
  @Input() multiselect = false;
  // ~Controls -----------------------------------------------------------------

  // Appearance ----------------------------------------------------------------
  @Input() gridLike = false;
  // ~Appearance ---------------------------------------------------------------

  constructor() { }

  ngOnInit() {
    if (!this.array) {
      throw new Error(`No array is provided for generic list component`);
    }
  }

  onElementSelect(selectedElement: any): void {
    const localElement = this.array.find(element => element.id === selectedElement.id);
    localElement.selected = true;

    if (!this.multiselect) {
      this.array.map(element => {
        if (element.id !== selectedElement.id) {
          element.selected = false;
        }
      });
    }

    this.elementSelect.emit(localElement);
  }

}
