import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
/**
 * This is dummy implementation. GridLike property logic is repeated in both
 * user-list and professor-list component. Demo need for generic list.
 * Even when little logic is present and when classes are from the same inheritance
 * chain.
 */
export class UserListComponent implements OnInit {

  @Input() users: Array<User>;
  @Input() gridLike = false;

  constructor() { }

  ngOnInit() {
    if (!this.users) {
      // #debug-verbosity: suspicious
      console.error(`No users were given to user-list component`);
    }
  }

}