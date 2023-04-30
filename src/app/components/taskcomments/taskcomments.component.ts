import { Component, OnInit } from '@angular/core';
import { TaskComments } from 'src/app/Models/TaskComments';
import { TaskCommentsService } from './../../services/taskcomments/taskcomments.service'
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/Models/Task';


@Component({
  selector: 'app-TaskComments',
  templateUrl: './TaskComments.component.html',
  styleUrls: ['./TaskComments.component.css']
})
export class TaskCommentsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  taskcomments: TaskComments = new TaskComments();
  taskcommentsData: TaskComments[] = []
  taskData: Task[] = []
  taskcommentsId: number = 0;

  constructor(
    private taskcommentsService: TaskCommentsService,
    private taskService: TaskService,

  ) { }

  ngOnInit(): any {
    this.GetTaskComments();
    this.GetTasks();
  }

  // By using this method we will get the TaskComments 
  GetTaskComments(): any {
    this.taskcommentsService.GetTaskComments().subscribe((res: any) => {
      this.taskcommentsData = res;

    })
  }

  // By using this method we will get the TaskComments based on the Id
  GetTaskCommentsById(Id: number): any {
    this.taskcommentsService.GetTaskCommentsById(Id).subscribe((res: any) => {
      this.taskcomments = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the TaskComments based on TaskComments
  AddTaskComments(): any {
    this.taskcommentsService.AddTaskComments(this.taskcomments).subscribe((res: any) => {
      this.GetTaskComments();
      this.taskcomments = new TaskComments();
    })
  }

   // By uing this method we will Update the TaskComments based on TaskComments
  UpdateTaskComments(): any {
    this.taskcommentsService.UpdateTaskComments(this.taskcomments).subscribe((res: any) => {
      this.GetTaskComments();
      this.taskcomments = new TaskComments();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the TaskComments based on the Id
  DeleteTaskComments(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.taskcommentsService.DeleteTaskComments(Id).subscribe((res: any) => {
        this.GetTaskComments();
        this.taskcomments = new TaskComments();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetTaskComments();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetTaskComments();
  }

   // By using this method we will get the GetTasks 
   GetTasks(): any {
    this.taskService.GetTask().subscribe((res: any) => {
      this.taskData = res;
    })
  }
}

