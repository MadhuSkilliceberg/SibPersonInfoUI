import { Component, OnInit } from '@angular/core';
import { TaskLog } from 'src/app/Models/TaskLog';
import { TaskLogService } from './../../services/tasklog/tasklog.service'
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/Models/Task';
import { UsersService } from 'src/app/services/users/users.service';
import { Users } from 'src/app/Models/Users';


@Component({
  selector: 'app-TaskLog',
  templateUrl: './TaskLog.component.html',
  styleUrls: ['./TaskLog.component.css']
})
export class TaskLogComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  tasklog: TaskLog = new TaskLog();
  tasklogData: TaskLog[] = []
  taskData: Task[] = []
  usersData: Users[] = []
  tasklogId: number = 0;

  constructor(
    private tasklogService: TaskLogService,
    private taskService: TaskService,
    private usersService: UsersService,

  ) { }

  ngOnInit(): any {
    this.GetTaskLog();
    this.GetTasks();
   this.GetUsers();
  }

  // By using this method we will get the TaskLog 
  GetTaskLog(): any {
    this.tasklogService.GetTaskLog().subscribe((res: any) => {
      this.tasklogData = res;

    })
  }

  // By using this method we will get the TaskLog based on the Id
  GetTaskLogById(Id: number): any {
    this.tasklogService.GetTaskLogById(Id).subscribe((res: any) => {
      this.tasklog = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the TaskLog based on TaskLog
  AddTaskLog(): any {
    this.tasklogService.AddTaskLog(this.tasklog).subscribe((res: any) => {
      this.GetTaskLog();
      this.tasklog = new TaskLog();
    })
  }

   // By uing this method we will Update the TaskLog based on TaskLog
  UpdateTaskLog(): any {
    this.tasklogService.UpdateTaskLog(this.tasklog).subscribe((res: any) => {
      this.GetTaskLog();
      this.tasklog = new TaskLog();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the TaskLog based on the Id
  DeleteTaskLog(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.tasklogService.DeleteTaskLog(Id).subscribe((res: any) => {
        this.GetTaskLog();
        this.tasklog = new TaskLog();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetTaskLog();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetTaskLog();
  }

    // By using this method we will get the GetTasks 
    GetTasks(): any {
      this.taskService.GetTask().subscribe((res: any) => {
        this.taskData = res;
      })
    }

     
  GetUsers(): any {
    this.usersService.GetUsers().subscribe((res: any) => {
      this.usersData = res;

    })
  }
}

