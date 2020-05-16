import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskModel } from 'src/app/core/models/models';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';
import { DocumentReference } from '@angular/fire/firestore/interfaces';
import { ModalService } from 'src/app/core/services/modal/modal.service';

@Component({
  selector: 'tm-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  tasksForm: FormGroup;
  taskNameControl: FormControl;
  taskCategoryControl: FormControl;
  taskDescriptionControl: FormControl;
  taskReminderControl: FormControl;
  taskFrequencyControl: FormControl;

  constructor(
    private fb: FormBuilder,
    private taskService: FirebaseService,
    private modalService: ModalService
    ) { }

  initForm() {
    this.taskNameControl = this.fb.control('', Validators.required);
    this.taskCategoryControl = this.fb.control('', Validators.required);
    this.taskDescriptionControl = this.fb.control('', Validators.required);
    this.taskFrequencyControl = this.fb.control('', Validators.required);
    this.taskNameControl = this.fb.control('', Validators.required);
    this.tasksForm = this.fb.group({
      name: this.taskNameControl,
      category: this.taskCategoryControl,
      description: this.taskDescriptionControl,
      reminder: this.taskReminderControl,
      frequency: this.taskFrequencyControl,
    });
  }

  resetForm() {
    this.taskNameControl.setValue('');
    this.taskCategoryControl.setValue('');
    this.taskDescriptionControl.setValue('');
    this.taskFrequencyControl.setValue('');
    this.taskReminderControl.setValue('');
  }

  addTask(task: TaskModel): Promise<void | DocumentReference> {
    return this.taskService.addTask(task).then(
      success => {
        console.log('so? : ', success);
        this.modalService.close();
      },
      error => console.log('error: ', error));
  }

  ngOnInit() {
    this.initForm();
  }

}
