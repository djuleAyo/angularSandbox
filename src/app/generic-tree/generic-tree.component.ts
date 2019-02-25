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

    if (this.tree) {
      console.log( `setting root path to breadcrumb` );
      this.selectedPath =  [this.tree];
    }
  }

  selectElementLeftList(element: any): void {
    this.selectedElement = element;
    this.purgePreviousSelections(element);
  }
  selectElementRightList(element: any) {
    element = element[0];
    element.selected = true;

    this.selectedElementParent = this.selectedElement;
    this.selectedPath.push(this.selectedElementParent);
    this.selectedElement = element;

    console.log( `left list`, this.selectedElementParent );
    console.log( `right list`, this.selectedElement );
  }

  breadcrumbSelect(node: any): void {

    this.purgePreviousSelections(this.selectedElementParent);
    this.selectedElementParent = node;
    this.selectedElement = undefined;

    this.selectedPath.splice(this.selectedPath.indexOf(node) + 1);
  }

  private purgePreviousSelections(node: any) {
    node.children.map(child => {delete child.selected; return child; });
  }
}


