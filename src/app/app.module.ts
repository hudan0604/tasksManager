import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { NoTasksComponent } from './noTasks/no-tasks/no-tasks.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { TaskComponent } from './tasks/task/task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ButtonComponent } from './ui-components/button/button.component';
import { CreateTaskComponent } from './tasksCRUD/create-task/create-task.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { ModalComponent } from './modal/modal/modal.component';
import { SanitizeHtmlPipe } from './core/pipes/sanitizeHtml/sanitize-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NoTasksComponent,
    TaskComponent,
    TaskListComponent,
    ButtonComponent,
    CreateTaskComponent,
    ModalComponent,
    SanitizeHtmlPipe
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    PerfectScrollbarModule,
    DynamicDialogModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
