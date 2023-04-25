import { Component, OnInit } from '@angular/core';
import { Family } from 'src/app/Models/Family';
import { FamilyService } from './../../services/family/family.service'


@Component({
  selector: 'app-Family',
  templateUrl: './Family.component.html',
  styleUrls: ['./Family.component.css']
})
export class FamilyComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  family: Family = new Family();
  familyData: Family[] = []
  familyId: number = 0;

  constructor(
    private familyService: FamilyService,

  ) { }

  ngOnInit(): any {
    this.GetFamily();
  }

  // By using this method we will get the Family 
  GetFamily(): any {
    this.familyService.GetFamily().subscribe((res: any) => {
      this.familyData = res;

    })
  }

  // By using this method we will get the Family based on the Id
  GetFamilyById(Id: number): any {
    this.familyService.GetFamilyById(Id).subscribe((res: any) => {
      this.family = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Family based on Family
  AddFamily(): any {
    this.familyService.AddFamily(this.family).subscribe((res: any) => {
      this.GetFamily();
      this.family = new Family();
    })
  }

   // By uing this method we will Update the Family based on Family
  UpdateFamily(): any {
    this.familyService.UpdateFamily(this.family).subscribe((res: any) => {
      this.GetFamily();
      this.family = new Family();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Family based on the Id
  DeleteFamily(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.familyService.DeleteFamily(Id).subscribe((res: any) => {
        this.GetFamily();
        this.family = new Family();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetFamily();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetFamily();
  }
}

