import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserService } from './user/user.service';
import { ProfessorDetailsComponent } from './professor/professor-details/professor-details.component';
import { ProfessorService } from './professor/professor.service';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { GenericListComponent } from './generic-list/generic-list.component';
import { GenericListItemComponent } from './generic-list/generic-list-item/generic-list-item.component';
import { GenericTreeComponent } from './generic-tree/generic-tree.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FileTreeRecordComponent } from './file-tree-record/file-tree-record.component';
import { FileTreeRecordListItemComponent } from './file-tree-record/file-tree-record-list-item/file-tree-record-list-item.component';
import { FileSizePipe } from './file-size.pipe';
import { GenericBreadcrumbComponent } from './generic-breadcrumb/generic-breadcrumb.component';
import { MeanCourseComponent } from './mean-course/mean-course.component';
import { PostCreateComponent } from './mean-course/post/post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule
  } from '@angular/material';
import { HeaderComponent } from './mean-course/header/header.component';
import { PostListComponent } from './mean-course/post/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    ProfessorDetailsComponent,
    ProfessorListComponent,
    GenericListComponent,
    GenericListItemComponent,
    GenericTreeComponent,
    FileTreeRecordComponent,
    FileTreeRecordListItemComponent,
    FileSizePipe,
    GenericBreadcrumbComponent,
    MeanCourseComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [UserService, ProfessorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
