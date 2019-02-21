import { Component, OnInit, Input } from '@angular/core';
import { Professor } from '../professor.model';

@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.scss']
})
export class ProfessorDetailsComponent implements OnInit {

  @Input() professor: Professor;

  constructor() {}

  ngOnInit() {
  }

}
