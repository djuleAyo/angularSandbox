import { Component, OnInit, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';

/** Determins how a list is displayed */
type ListStyle = 'classic' | 'compact' | 'grid' | 'horizontal';
type PaginationStyle = 'pagination' | 'infiniteScroll';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent implements OnInit {

  /** The items list displays */
  @Input() items: any[];

  /** Determins do list items glow when hovered */
  @Input() hoverGlow      = false;
  /** Determins wether list items can be selected  */
  @Input() selectable     = false;
  /** Determins wether multiple items can be selected */
  @Input() multiselectable = false;

  /** Determins wether sorting is present on the list */
  @Input() sortable = false;
  /** Determins wether filtering of list is possible */
  @Input() filterable = false;

  @Input() listStyle: ListStyle;

  @Input() pagable = false;
  @Input() pageSize = 100;
  @Input() paginationStyle: PaginationStyle;


  @Output() select = new EventEmitter<any>();

  selected = [];

  @ContentChild(TemplateRef) listItem;



  ngOnInit() {
  }

  isClassic(): boolean {
    return this.listStyle === 'classic' || !this.listStyle;
  }


  onSelect(item) {
    if (!this.selectable) {return; }
    if (!this.multiselectable) {
      this.selected = [item];
      this.select.emit(item);
      return;
    }
    // multiselect
    this.toggleItemSelection(item);
    this.select.emit(this.selected);

  }
  isSelected(item): boolean {
    return this.selected.find(selectedItem => item === selectedItem);
  }
  toggleItemSelection(item) {
    const isSelected = this.isSelected(item);
    if (isSelected) {
      this.selected = this.selected.filter(selectedItem => selectedItem !== item);
    } else {
      this.selected.push(item);
    }
  }
}
