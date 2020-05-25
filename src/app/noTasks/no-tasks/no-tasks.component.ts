import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal/modal.service';

@Component({
  selector: 'tm-no-tasks',
  templateUrl: './no-tasks.component.html',
  styleUrls: ['./no-tasks.component.scss']
})
export class NoTasksComponent implements OnInit {
  buttonLabel = 'Add a task';

  constructor(
  ) { }

  ngOnInit() {
  }

}
