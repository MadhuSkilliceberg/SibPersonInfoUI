import { Component, OnInit } from '@angular/core';
import { TaskState } from 'src/app/Models/TaskState';
import { TaskStateService } from './../../services/taskstate/taskstate.service'
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/Models/Task';
import { UsersService } from 'src/app/services/users/users.service';
import { Users } from 'src/app/Models/Users';


@Component({
  selector: 'app-TaskState',
  templateUrl: './TaskState.component.html',
  styleUrls: ['./TaskState.component.css']
})
export class TaskStateComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  taskstate: TaskState = new TaskState();
  taskstateData: TaskState[] = []
  taskData: Task[] = []
  taskstateId: number = 0;
  usersData: Users[] = []

  constructor(
    private taskstateService: TaskStateService,
    private taskService: TaskService,
    private usersService: UsersService,

  ) { }

  ngOnInit(): any {
    this.GetTaskState();
    this.GetTasks();
    this.GetUsers();
  }

  // By using this method we will get the TaskState 
  GetTaskState(): any {
    this.taskstateService.GetTaskState().subscribe((res: any) => {
      this.taskstateData = res;

    })
  }

  // By using this method we will get the TaskState based on the Id
  GetTaskStateById(Id: number): any {
    this.taskstateService.GetTaskStateById(Id).subscribe((res: any) => {
      this.taskstate = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the TaskState based on TaskState
  AddTaskState(): any {
    this.taskstateService.AddTaskState(this.taskstate).subscribe((res: any) => {
      this.GetTaskState();
      this.taskstate = new TaskState();
    })
  }

   // By uing this method we will Update the TaskState based on TaskState
  UpdateTaskState(): any {
    this.taskstateService.UpdateTaskState(this.taskstate).subscribe((res: any) => {
      this.GetTaskState();
      this.taskstate = new TaskState();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the TaskState based on the Id
  DeleteTaskState(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.taskstateService.DeleteTaskState(Id).subscribe((res: any) => {
        this.GetTaskState();
        this.taskstate = new TaskState();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetTaskState();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetTaskState();
  }
    // By using this method we will get the GetTasks 
    GetTasks(): any {
      this.taskService.GetTask().subscribe((res: any) => {
        this.taskData = res;
      })
    }
       
    // By using this method we will get the GetUsers 
    GetUsers(): any {
    this.usersService.GetUsers().subscribe((res: any) => {
      this.usersData = res;

    })
  }
}

