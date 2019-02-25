import { Component } from '@angular/core';
import { User } from './user/user.model';
import { UserService } from './user/user.service';
import { ProfessorService } from './professor/professor.service';
import { Professor } from './professor/professor.model';
import { LocalReadService } from './local-read.service';
import { FileTreeRecord } from './file-tree-record/file-tree-record.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    private localRead: LocalReadService,
    private userService: UserService,
    private professorService: ProfessorService
  ) {
    this.localRead.getTestTree().subscribe(tree => {
      this.testTree = new FileTreeRecord(tree);
      console.log(`done constructing test tree`);
    });
  }

  testTree: object = undefined;
  users: Array<User> = this.userService._genTestUsers(10);
  professors: Array<Professor> = this.professorService._genTestProfessors(10);
  mixedData: any = [...this.users, ...this.professors];

}
