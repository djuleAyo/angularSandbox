import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generic-breadcrumb',
  templateUrl: './generic-breadcrumb.component.html',
  styleUrls: ['./generic-breadcrumb.component.scss']
})
export class GenericBreadcrumbComponent implements OnInit {

  @Input() path: Array<object>;
  @Output() select = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
  }

}
