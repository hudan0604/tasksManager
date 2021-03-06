import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskModel } from 'src/app/core/models/models';
import { FirebaseService } from 'src/app/core/services/firebase/firebase.service';
import { DocumentReference } from '@angular/fire/firestore/interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Component({
  selector: 'tm-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  categories = ['Sports', 'Banking', 'Holidays', 'Children', 'Animals', 'Car', 'Private'];
  reminders = ['10 minutes', '30 minutes', '1 hour', '2 hours', '3 hours', '5 hours', '8 hours', '1 day', '2 days', '3 days', '1 week'];
  frequencies = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
  tasksForm: FormGroup;
  taskNameControl: FormControl;
  taskCategoryControl: FormControl;
  taskDescriptionControl: FormControl;
  taskReminderControl: FormControl;
  taskFrequencyControl: FormControl;
  taskDateControl: FormControl;

  constructor(
    private fb: FormBuilder,
    private taskService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    ) { }

  initForm() {
    this.taskNameControl = this.fb.control('', Validators.required);
    this.taskCategoryControl = this.fb.control('', Validators.required);
    this.taskDescriptionControl = this.fb.control('', Validators.required);
    this.taskFrequencyControl = this.fb.control('', Validators.required);
    this.taskNameControl = this.fb.control('', Validators.required);
    this.taskDateControl = this.fb.control('', Validators.required);
    this.taskReminderControl = this.fb.control('', Validators.required);

    this.tasksForm = this.fb.group({
      name: this.taskNameControl,
      category: this.taskCategoryControl,
      description: this.taskDescriptionControl,
      reminder: this.taskReminderControl,
      frequency: this.taskFrequencyControl,
      date: this.taskDateControl,
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
      () => {
        this.goHome();
        this.toastService.openToast('success', 'Your task has been created !');
      },
      // Todo: create toast service to show error
      error => console.log('error: ', error));
  }

  goHome() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnInit() {
    this.initForm();
  }

}
