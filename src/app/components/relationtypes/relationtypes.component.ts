import { Component, OnInit } from '@angular/core';
import { RelationTypes } from 'src/app/Models/RelationTypes';
import { RelationTypesService } from './../../services/relationtypes/relationtypes.service'


@Component({
  selector: 'app-RelationTypes',
  templateUrl: './RelationTypes.component.html',
  styleUrls: ['./RelationTypes.component.css']
})
export class RelationTypesComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  relationtypes: RelationTypes = new RelationTypes();
  relationtypesData: RelationTypes[] = []
  relationtypesId: number = 0;

  constructor(
    private relationtypesService: RelationTypesService,

  ) { }

  ngOnInit(): any {
    this.GetRelationTypes();
  }

  // By using this method we will get the RelationTypes 
  GetRelationTypes(): any {
    this.relationtypesService.GetRelationTypes().subscribe((res: any) => {
      this.relationtypesData = res;

    })
  }

  // By using this method we will get the RelationTypes based on the Id
  GetRelationTypesById(Id: number): any {
    this.relationtypesService.GetRelationTypesById(Id).subscribe((res: any) => {
      this.relationtypes = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the RelationTypes based on RelationTypes
  AddRelationTypes(): any {
    this.relationtypesService.AddRelationTypes(this.relationtypes).subscribe((res: any) => {
      this.GetRelationTypes();
      this.relationtypes = new RelationTypes();
    })
  }

   // By uing this method we will Update the RelationTypes based on RelationTypes
  UpdateRelationTypes(): any {
    this.relationtypesService.UpdateRelationTypes(this.relationtypes).subscribe((res: any) => {
      this.GetRelationTypes();
      this.relationtypes = new RelationTypes();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the RelationTypes based on the Id
  DeleteRelationTypes(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.relationtypesService.DeleteRelationTypes(Id).subscribe((res: any) => {
        this.GetRelationTypes();
        this.relationtypes = new RelationTypes();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetRelationTypes();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetRelationTypes();
  }
}

