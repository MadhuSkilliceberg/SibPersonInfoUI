import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
 
  @Input() TreeData!: any[];
  constructor(){
    console.log(this.TreeData);
  }

  toggleNode(menuItem: any): void {
    menuItem.expanded = !menuItem.expanded;
  }
}
