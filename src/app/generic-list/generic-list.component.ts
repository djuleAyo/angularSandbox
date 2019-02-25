import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent implements OnInit, OnChanges {

  private selectedElements: Array<any> = [];


  @Input() array: Array<any>;

  // Events --------------------------------------------------------------------

  @Output() elementSelect: EventEmitter<any> = new EventEmitter<any>();

  // ---------------------------------------------------------------------------

  // Controls ------------------------------------------------------------------
  @Input() selectable = true;
  @Input() multiselect = true;

  @Input() editable = true;
  @Input() draggable = true;
  @Input() delete = true;
  @Input() deleteAll = true;
  // ---------------------------------------------------------------------------

  // Appearance ----------------------------------------------------------------
  @Input() gridLike = false;
  // ---------------------------------------------------------------------------

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (this.array) {
      this.selectedElements = this.array.filter(element => element.selected === true);
    }
  }

  onElementSelect(element: any): void {

    if (!this.selectable) {
      return;
    }

    const isSelected = this.isSelected(element);

    // toggle logic
    if (!isSelected) {
      element.selected = true;
      if (this.multiselect) {
        this.selectedElements.push(element);
      } else {
        this.selectedElements = [element];
      }
    } else {
      element.selected = false;
      this.selectedElements = this.selectedElements.filter(
        selectedElement => selectedElement !== element
      );
    }

    this.elementSelect.emit(
      this.multiselect ? this.selectedElements : this.selectedElements[0]
    );
  }

  isSelected(element: any): boolean {
    return this.selectedElements.find(
      selectedElement => selectedElement === element
    ) !== undefined;
  }

  drop(event: CdkDragDrop<Array<any>>) {
    moveItemInArray(this.array, event.previousIndex, event.currentIndex);
  }

}
