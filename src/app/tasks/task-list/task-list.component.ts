import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tm-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() tasks;
  constructor() { }

  ngOnInit() {
  }

}
