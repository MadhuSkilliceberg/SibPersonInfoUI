import { Component, OnInit } from '@angular/core';
import { States } from 'src/app/Models/States';
import { StatesService } from './../../services/states/states.service'


@Component({
  selector: 'app-States',
  templateUrl: './States.component.html',
  styleUrls: ['./States.component.css']
})
export class StatesComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  states: States = new States();
  statesData: States[] = []
  statesId: number = 0;

  constructor(
    private statesService: StatesService,

  ) { }

  ngOnInit(): any {
    this.GetStates();
  }

  // By using this method we will get the States 
  GetStates(): any {
    this.statesService.GetStates().subscribe((res: any) => {
      this.statesData = res;

    })
  }

  // By using this method we will get the States based on the Id
  GetStatesById(Id: number): any {
    this.statesService.GetStatesById(Id).subscribe((res: any) => {
      this.states = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the States based on States
  AddStates(): any {
    this.statesService.AddStates(this.states).subscribe((res: any) => {
      this.GetStates();
      this.states = new States();
    })
  }

   // By uing this method we will Update the States based on States
  UpdateStates(): any {
    this.statesService.UpdateStates(this.states).subscribe((res: any) => {
      this.GetStates();
      this.states = new States();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the States based on the Id
  DeleteStates(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.statesService.DeleteStates(Id).subscribe((res: any) => {
        this.GetStates();
        this.states = new States();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetStates();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetStates();
  }
}

