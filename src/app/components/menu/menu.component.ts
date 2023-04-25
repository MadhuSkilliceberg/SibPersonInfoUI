import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/Models/Menu';
import { MenuService } from './../../services/menu/menu.service'


@Component({
  selector: 'app-Menu',
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.css']
})
export class MenuComponent implements OnInit {


  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  menu: Menu = new Menu();
  menuData: Menu[] = []
  menuId: number = 0;

  constructor(
    private menuService: MenuService,

  ) { }

  ngOnInit(): any {
    this.GetMenu();
  }

  // By using this method we will get the Menu 
  GetMenu(): any {
    this.menuService.GetMenu().subscribe((res: any) => {
      this.menuData = res;

    })
  }

  // By using this method we will get the Menu based on the Id
  GetMenuById(Id: number): any {
    this.menuService.GetMenuById(Id).subscribe((res: any) => {
      this.menu = res;
      this.isSave = false;
      this.isUpdate = true;
    })
  }

  // By uing this method we will Add the Menu based on Menu
  AddMenu(): any {
    this.menuService.AddMenu(this.menu).subscribe((res: any) => {
      this.GetMenu();
      this.menu = new Menu();
    })
  }

   // By uing this method we will Update the Menu based on Menu
  UpdateMenu(): any {
    this.menuService.UpdateMenu(this.menu).subscribe((res: any) => {
      this.GetMenu();
      this.menu = new Menu();
      this.isSave = true;
      this.isUpdate = false;
    })
  }

// By using this method we will delete the Menu based on the Id
  DeleteMenu(Id: number): any {
    if (confirm("Do you want delete this record?")) {
      this.menuService.DeleteMenu(Id).subscribe((res: any) => {
        this.GetMenu();
        this.menu = new Menu();
      })
    }
  }

  // By this methods pagination events
  onTableDataChange(event: any) {
    this.page = event;
    this.GetMenu();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetMenu();
  }
}

