import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal/modal.service';
import { ModalConfig } from 'src/app/core/models/models';

@Component({
  selector: 'tm-no-tasks',
  templateUrl: './no-tasks.component.html',
  styleUrls: ['./no-tasks.component.scss']
})
export class NoTasksComponent implements OnInit {
  buttonLabel = 'Add a task';
  modalConfig: ModalConfig = {
    title: 'Add a task',
    content: `<tm-create-task></tm-create-task>`
  };

  constructor(
    public modalService: ModalService,
  ) { }

  showCreateTaskModal() {
    console.log('are we in method to open modal?');
    this.modalService.open();
  }

  ngOnInit() {
  }

}
