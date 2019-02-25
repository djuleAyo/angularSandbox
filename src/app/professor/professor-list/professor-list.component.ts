import { Component, OnInit, Input } from '@angular/core';
import { Professor } from '../professor.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
/**
 * This is dummy implementation. GridLike property logic is repeated in both
 * user-list and professor-list component. Demo need for generic list.
 * Even when little logic is present and when classes are from the same inheritance
 * chain.
 */
export class ProfessorListComponent implements OnInit {

  @Input() gridLike = false;
  @Input() professors: Array<Professor>;

  constructor() { }

  ngOnInit() {
    if (!this.professors) {
      throw new Error(`No professors were provided for professor-list component`);
    }
  }

  drop(event: CdkDragDrop<Array<any>>) {
    moveItemInArray(this.professors, event.previousIndex, event.currentIndex);
  }

}
