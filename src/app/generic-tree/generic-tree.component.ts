import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-generic-tree',
  templateUrl: './generic-tree.component.html',
  styleUrls: ['./generic-tree.component.scss']
})
export class GenericTreeComponent implements OnChanges {

  @Input() tree;
  selectedElementParent: any;
  selectedElement: any;
  selectedPath: Array<any> = [];

  leftList: Array<any>;
  rightList: Array<any>;
  constructor() {}

  ngOnChanges() {
    this.selectedElementParent = this.tree;
  }

  selectElementLeftList(element: any): void {
    this.selectedElement = element;
  }
  selectElementRightList(element: any) {
    this.selectedElementParent = this.selectedElement;
    this.selectedPath.push(this.selectedElement);
    this.selectedElement = element;
  }
}
