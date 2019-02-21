import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: Array<User>;

  constructor() { }

  ngOnInit() {
    if (!this.users) {
      // #debug-verbosity: suspicious
      console.error(`No users were given to user-list component`);
    }
  }

}
