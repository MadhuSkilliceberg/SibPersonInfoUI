import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-treenode',
  templateUrl: './treenode.component.html',
  styleUrls: ['./treenode.component.css']
})
export class TreenodeComponent {
   
  @Input() TreeData!: any[];
  constructor(){
    console.log(this.TreeData);
  }
}
