import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from 'src/app/core/models/models';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tm-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: TaskModel;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }
  deleteTask(id) {
    this.firebaseService.deleteTask(id)
    .then(
      () => {
        this.router.navigate(['../'], {relativeTo: this.route });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
