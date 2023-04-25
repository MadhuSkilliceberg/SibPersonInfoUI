import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/Task';
import { TaskService } from './../../services/task/task.service'


@Component({
  selector: 'app-Task',
  templateUrl: './Task.component.html',
  styleUrls: ['./Task.component.css']
})
export class TaskComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  task: Task = new Task();
  taskData: Task[] = []
  taskId: number = 0;

  constructor(
    private taskService: TaskService,

  ) { }

  ngOnInit(): any {
    this.GetTask();
  }

  // By using this method we will get the Task 
  GetTask(): any {
    this.taskService.GetTask().subscribe((res: any) => {
      this.taskData = res;

    })
  }

  // By using this method we will get the Task based on the Id
  GetTaskById(Id: number): any {
    this.taskService.GetTaskById(Id).subscribe((res: any) => {
      this.task = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Task based on Task
  AddTask(): any {
    this.taskService.AddTask(this.task).subscribe((res: any) => {
      this.GetTask();
      this.task = new Task();
    })
  }

   // By uing this method we will Update the Task based on Task
  UpdateTask(): any {
    this.taskService.UpdateTask(this.task).subscribe((res: any) => {
      this.GetTask();
      this.task = new Task();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Task based on the Id
  DeleteTask(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.taskService.DeleteTask(Id).subscribe((res: any) => {
        this.GetTask();
        this.task = new Task();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetTask();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetTask();
  }
}

