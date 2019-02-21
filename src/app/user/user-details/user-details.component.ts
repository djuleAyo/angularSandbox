import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {

    // #debug-verbosity: suspicious
    if (!this.user) {
      console.error(`No user was provided for user-details component.`);
    }
  }

}
