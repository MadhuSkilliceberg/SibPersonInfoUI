import { Component, OnInit } from '@angular/core';
import { Sprint } from 'src/app/Models/Sprint';
import { SprintService } from './../../services/sprint/sprint.service'


@Component({
  selector: 'app-Sprint',
  templateUrl: './Sprint.component.html',
  styleUrls: ['./Sprint.component.css']
})
export class SprintComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  sprint: Sprint = new Sprint();
  sprintData: Sprint[] = []
  sprintId: number = 0;

  constructor(
    private sprintService: SprintService,

  ) { }

  ngOnInit(): any {
    this.GetSprint();
  }

  // By using this method we will get the Sprint 
  GetSprint(): any {
    this.sprintService.GetSprint().subscribe((res: any) => {
      this.sprintData = res;

    })
  }

  // By using this method we will get the Sprint based on the Id
  GetSprintById(Id: number): any {
    this.sprintService.GetSprintById(Id).subscribe((res: any) => {
      this.sprint = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Sprint based on Sprint
  AddSprint(): any {
    this.sprintService.AddSprint(this.sprint).subscribe((res: any) => {
      this.GetSprint();
      this.sprint = new Sprint();
    })
  }

   // By uing this method we will Update the Sprint based on Sprint
  UpdateSprint(): any {
    this.sprintService.UpdateSprint(this.sprint).subscribe((res: any) => {
      this.GetSprint();
      this.sprint = new Sprint();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Sprint based on the Id
  DeleteSprint(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.sprintService.DeleteSprint(Id).subscribe((res: any) => {
        this.GetSprint();
        this.sprint = new Sprint();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetSprint();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetSprint();
  }
}

