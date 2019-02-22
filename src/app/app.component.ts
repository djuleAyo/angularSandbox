import { Component } from '@angular/core';
import { User } from './user/user.model';
import { UserService } from './user/user.service';
import { ProfessorService } from './professor/professor.service';
import { Professor } from './professor/professor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    private userService: UserService,
    private professorService: ProfessorService
  ) {}



  users: Array<User> = this.userService._genTestUsers(20);
  professors: Array<Professor> = this.professorService._genTestProfessors(20);
  mixedData: any = [...this.users, ...this.professors];

}
