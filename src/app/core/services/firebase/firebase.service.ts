import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore/';
import { TaskModel } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private db: AngularFirestore,
  ) { }
  getTasks(): any {
    return this.db.collection('tasks').snapshotChanges();
  }
  addTask(task: TaskModel) {
    return this.db.collection('tasks').add(task);
}
// updateTask(task: TaskModel) {
//   return this.db.doc('tasks/' + task.id).update(policy);
// }
}
