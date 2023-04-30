import { Component, OnInit } from '@angular/core';
import { TaskDocuments } from 'src/app/Models/TaskDocuments';
import { TaskDocumentsService } from './../../services/taskdocuments/taskdocuments.service'
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/Models/Task';


@Component({
  selector: 'app-TaskDocuments',
  templateUrl: './TaskDocuments.component.html',
  styleUrls: ['./TaskDocuments.component.css']
})
export class TaskDocumentsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  taskdocuments: TaskDocuments = new TaskDocuments();
  taskdocumentsData: TaskDocuments[] = []
  taskData: Task[] = []
  taskdocumentsId: number = 0;

  constructor(
    private taskdocumentsService: TaskDocumentsService,
    private taskService: TaskService,

  ) { }

  ngOnInit(): any {
    this.GetTaskDocuments();
    this.GetTasks();
  }

  // By using this method we will get the TaskDocuments 
  GetTaskDocuments(): any {
    this.taskdocumentsService.GetTaskDocuments().subscribe((res: any) => {
      this.taskdocumentsData = res;

    })
  }

  // By using this method we will get the TaskDocuments based on the Id
  GetTaskDocumentsById(Id: number): any {
    this.taskdocumentsService.GetTaskDocumentsById(Id).subscribe((res: any) => {
      this.taskdocuments = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the TaskDocuments based on TaskDocuments
  AddTaskDocuments(): any {
    this.taskdocumentsService.AddTaskDocuments(this.taskdocuments).subscribe((res: any) => {
      this.GetTaskDocuments();
      this.taskdocuments = new TaskDocuments();
    })
  }

   // By uing this method we will Update the TaskDocuments based on TaskDocuments
  UpdateTaskDocuments(): any {
    this.taskdocumentsService.UpdateTaskDocuments(this.taskdocuments).subscribe((res: any) => {
      this.GetTaskDocuments();
      this.taskdocuments = new TaskDocuments();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the TaskDocuments based on the Id
  DeleteTaskDocuments(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.taskdocumentsService.DeleteTaskDocuments(Id).subscribe((res: any) => {
        this.GetTaskDocuments();
        this.taskdocuments = new TaskDocuments();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetTaskDocuments();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetTaskDocuments();
  }

   // By using this method we will get the GetTasks 
   GetTasks(): any {
    this.taskService.GetTask().subscribe((res: any) => {
      this.taskData = res;
    })
  }
}

