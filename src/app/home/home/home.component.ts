import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';
import { TaskModel } from 'src/app/core/models/models';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'tm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  tasks$: TaskModel[];
  tasksSubscription: Subscription;

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.tasksSubscription = this.firebaseService.getTasks().subscribe(data => {
      this.tasks$ = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as TaskModel;
      });
      console.log('tasks: ', this.tasks$);
    });
  }

  ngOnDestroy() {
    this.tasksSubscription.unsubscribe();
  }
}
