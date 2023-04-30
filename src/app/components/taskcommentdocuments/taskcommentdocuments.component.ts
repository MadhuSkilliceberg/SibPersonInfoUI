import { Component, OnInit } from '@angular/core';
import { TaskCommentDocuments } from 'src/app/Models/TaskCommentDocuments';
import { TaskCommentDocumentsService } from './../../services/taskcommentdocuments/taskcommentdocuments.service'
import { TaskCommentsService } from 'src/app/services/taskcomments/taskcomments.service';
import { TaskComments } from 'src/app/Models/TaskComments';


@Component({
  selector: 'app-TaskCommentDocuments',
  templateUrl: './TaskCommentDocuments.component.html',
  styleUrls: ['./TaskCommentDocuments.component.css']
})
export class TaskCommentDocumentsComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  taskcommentdocuments: TaskCommentDocuments = new TaskCommentDocuments();
  taskcommentdocumentsData: TaskCommentDocuments[] = []
  taskCommentsData: TaskComments[] = []
  taskcommentdocumentsId: number = 0;

  constructor(
    private taskcommentdocumentsService: TaskCommentDocumentsService,
    private taskCommentsService: TaskCommentsService
  ) { }

  ngOnInit(): any {
    this.GetTaskCommentDocuments();
    this.GetTaskComments();
  }

  // By using this method we will get the TaskCommentDocuments 
  GetTaskCommentDocuments(): any {
    this.taskcommentdocumentsService.GetTaskCommentDocuments().subscribe((res: any) => {
      this.taskcommentdocumentsData = res;

    })
  }

  // By using this method we will get the TaskCommentDocuments based on the Id
  GetTaskCommentDocumentsById(Id: number): any {
    this.taskcommentdocumentsService.GetTaskCommentDocumentsById(Id).subscribe((res: any) => {
      this.taskcommentdocuments = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the TaskCommentDocuments based on TaskCommentDocuments
  AddTaskCommentDocuments(): any {
    this.taskcommentdocumentsService.AddTaskCommentDocuments(this.taskcommentdocuments).subscribe((res: any) => {
      this.GetTaskCommentDocuments();
      this.taskcommentdocuments = new TaskCommentDocuments();
    })
  }

  // By uing this method we will Update the TaskCommentDocuments based on TaskCommentDocuments
  UpdateTaskCommentDocuments(): any {
    this.taskcommentdocumentsService.UpdateTaskCommentDocuments(this.taskcommentdocuments).subscribe((res: any) => {
      this.GetTaskCommentDocuments();
      this.taskcommentdocuments = new TaskCommentDocuments();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

  // By using this method we will delete the TaskCommentDocuments based on the Id
  DeleteTaskCommentDocuments(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.taskcommentdocumentsService.DeleteTaskCommentDocuments(Id).subscribe((res: any) => {
        this.GetTaskCommentDocuments();
        this.taskcommentdocuments = new TaskCommentDocuments();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetTaskCommentDocuments();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetTaskCommentDocuments();
  }

// By using this method we will get the GetTaskComments 
GetTaskComments(): any {
  this.taskCommentsService.GetTaskComments().subscribe((res: any) => {
    this.taskCommentsData = res;
  })
}

}

