import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/';
import { TaskModel } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private db: AngularFirestore,
  ) { }
  getTasks(orderedBy: string): any {
    // return this.db.collection('tasks').orderBy('time', Query.Direction.ASCENDING).snapshotChanges();
    return this.db.collection('tasks', ref =>
ref.orderBy('date', 'asc')).snapshotChanges();
}
  addTask(task: TaskModel) {
    return this.db.collection('tasks').add(task);
}
// updateTask(task: TaskModel) {
//   return this.db.doc('tasks/' + task.id).update(policy);
// }
deleteTask(taskId) {
  return this.db.collection('tasks').doc(taskId).delete();
}
}
