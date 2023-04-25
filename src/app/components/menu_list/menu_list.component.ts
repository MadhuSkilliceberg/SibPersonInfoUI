import { Component, OnInit } from '@angular/core';
import { Menu_List } from 'src/app/Models/Menu_List';
import { Menu_ListService } from './../../services/menu_list/menu_list.service'


@Component({
  selector: 'app-Menu_List',
  templateUrl: './Menu_List.component.html',
  styleUrls: ['./Menu_List.component.css']
})
export class Menu_ListComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  menu_list: Menu_List = new Menu_List();
  menu_listData: Menu_List[] = []
  menu_listId: number = 0;

  constructor(
    private menu_listService: Menu_ListService,

  ) { }

  ngOnInit(): any {
    this.GetMenu_List();
  }

  // By using this method we will get the Menu_List 
  GetMenu_List(): any {
    this.menu_listService.GetMenu_List().subscribe((res: any) => {
      this.menu_listData = res;

    })
  }

  // By using this method we will get the Menu_List based on the Id
  GetMenu_ListById(Id: number): any {
    this.menu_listService.GetMenu_ListById(Id).subscribe((res: any) => {
      this.menu_list = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Menu_List based on Menu_List
  AddMenu_List(): any {
    this.menu_listService.AddMenu_List(this.menu_list).subscribe((res: any) => {
      this.GetMenu_List();
      this.menu_list = new Menu_List();
    })
  }

   // By uing this method we will Update the Menu_List based on Menu_List
  UpdateMenu_List(): any {
    this.menu_listService.UpdateMenu_List(this.menu_list).subscribe((res: any) => {
      this.GetMenu_List();
      this.menu_list = new Menu_List();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Menu_List based on the Id
  DeleteMenu_List(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.menu_listService.DeleteMenu_List(Id).subscribe((res: any) => {
        this.GetMenu_List();
        this.menu_list = new Menu_List();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetMenu_List();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetMenu_List();
  }
}

