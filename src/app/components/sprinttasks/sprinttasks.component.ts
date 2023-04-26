import { Component, OnInit } from '@angular/core';
import { SprintTasks } from 'src/app/Models/SprintTasks';
import { SprintTasksService } from './../../services/sprinttasks/sprinttasks.service';
import {TaskService} from './../../services/task/task.service';
import {SprintService} from './../../services/sprint/sprint.service';
import {StatusService} from './../../services/status/status.service';
import {Task} from './../../Models/Task';
import {Sprint} from './../../Models/Sprint';
import {Status} from './../../Models/Status';



@Component({
  selector: 'app-SprintTasks',
  templateUrl: './SprintTasks.component.html',
  styleUrls: ['./SprintTasks.component.css']
})
export class SprintTasksComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  sprinttasks: SprintTasks = new SprintTasks();
  sprinttasksData: SprintTasks[] = []
  sprinttasksId: number = 0;

  taskData: Task[] = []

  sprintData: Sprint[] = []

  statusData: Status[] = []



  constructor(
    private sprinttasksService: SprintTasksService,
    private taskService: TaskService,
    private sprintService: SprintService,
    private statusService: StatusService,



  ) { }

  ngOnInit(): any {
    this.GetSprintTasks();
    this.GetTask();
    this.GetSprint();
    this.GetStatus();

  }

  // By using this method we will get the SprintTasks 
  GetSprintTasks(): any {
    this.sprinttasksService.GetSprintTasks().subscribe((res: any) => {
      this.sprinttasksData = res;

    })
  }

  // By using this method we will get the SprintTasks based on the Id
  GetSprintTasksById(Id: number): any {
    this.sprinttasksService.GetSprintTasksById(Id).subscribe((res: any) => {
      this.sprinttasks = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the SprintTasks based on SprintTasks
  AddSprintTasks(): any {
    this.sprinttasksService.AddSprintTasks(this.sprinttasks).subscribe((res: any) => {
      this.GetSprintTasks();
      this.sprinttasks = new SprintTasks();
    })
  }

   // By uing this method we will Update the SprintTasks based on SprintTasks
  UpdateSprintTasks(): any {
    this.sprinttasksService.UpdateSprintTasks(this.sprinttasks).subscribe((res: any) => {
      this.GetSprintTasks();
      this.sprinttasks = new SprintTasks();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the SprintTasks based on the Id
  DeleteSprintTasks(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.sprinttasksService.DeleteSprintTasks(Id).subscribe((res: any) => {
        this.GetSprintTasks();
        this.sprinttasks = new SprintTasks();
      })
    }
  }

//This Get Method is From Task Component
  GetTask(): any {
    this.taskService.GetTask().subscribe((res: any) => {
      this.taskData = res;

    })
  }


//This Get Method is From Sprint Component
  GetSprint(): any {
    this.sprintService.GetSprint().subscribe((res: any) => {
      this.sprintData = res;

    })
  }

//This Get Method is From Status Component
  GetStatus(): any {
    this.statusService.GetStatus().subscribe((res: any) => {
      this.statusData = res;

    })
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetSprintTasks();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetSprintTasks();
  }
}

