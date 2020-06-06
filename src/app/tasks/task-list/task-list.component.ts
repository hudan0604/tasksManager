import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from 'src/app/core/models/models';
import { ToastComponent } from 'src/app/toast/toast/toast.component';

@Component({
  selector: 'tm-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: TaskModel[];
  monthsOfTasksTemp = [];
  monthsOfTasks = [];
  // tslint:disable-next-line:max-line-length
  monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  tasksYears = [];
  tasksClassified = {};
  constructor() { }

  getKeys(obj: {}): string[] {
    return Object.keys(obj);
  }

  getValues(obj: {}): any {
    return Object.values(obj);
  }

  /**
   *
   * @param tasks the list of tasks in database
   * now we have to classify the tasks
   * for each year, classify the tasks by month
   */
  tasksClassifiedByMonth(tasks: TaskModel[]): void {
    for (const task of tasks ) {
      // converting date string to Date type
      const taskDate = new Date(task.date);
      // get number of the month
      const taskMonthNumber = taskDate.getMonth();
      // task month as string
      const taskMonth = this.monthsOfTheYear[taskMonthNumber];
      const taskYear = taskDate.getFullYear().toString();
      
      // DIFERENT YEAR from other tasks :
      if (!this.tasksYears.includes(taskYear)) {
        this.tasksYears.push(taskYear);
        // then we put this different year in the final object with its task
        this.tasksClassified[taskYear] = {
          [taskMonth]: [{task}]
        };
        } else {
          // SAME YEAR
          // but DIFERENT MONTH from other tasks of the year :
          if (!(Object.keys(this.tasksClassified[taskYear])).includes(taskMonth)) {
            this.tasksClassified[taskYear][taskMonth] = [{task}];
          }
          // SAME MONTH than another task of the year :
          else {
            // pushing this task in the same month
            this.tasksClassified[taskYear][taskMonth].push({task});
          }
        }
      }
    this.tasksClassified = Object.entries(this.tasksClassified);
    }

  ngOnInit() {
    this.tasksClassifiedByMonth(this.tasks);
  }

}
