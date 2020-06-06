import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';
import { TaskModel } from 'src/app/core/models/models';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument } from '@angular/fire/firestore/public_api';


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
    this.tasksSubscription = this.firebaseService.getTasks('asc').subscribe((data: any) => {
      this.tasks$ = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as TaskModel;
      });
    });
  }

  ngOnDestroy() {
    this.tasksSubscription.unsubscribe();
  }
}
