import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserService } from './user/user.service';
import { ProfessorDetailsComponent } from './professor/professor-details/professor-details.component';
import { ProfessorService } from './professor/professor.service';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    ProfessorDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService, ProfessorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
