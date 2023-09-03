import { Component, OnInit } from '@angular/core';
import { UserSkills } from 'src/app/Models/UserSkills';
import { UserSkillsService } from './../../../services/userskills/userskills.service'
import { Skills } from 'src/app/Models/Skills';
import { SkillsService } from 'src/app/services/skills/skills.service';
import { UsersService } from 'src/app/services/users/users.service';
import { Users } from 'src/app/Models/Users';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'app-user-skill-edit',
  templateUrl: './user-skill-edit.component.html',
  styleUrls: ['./user-skill-edit.component.css']
})
export class UserSkillEditComponent {



  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9];

  isSave: boolean = true;
  isUpdate: boolean = false;

  userskills: UserSkills = new UserSkills();
  userskillsData: UserSkills[] = []
  userskillsId: number = 0;

  skillsData: Skills[] = []
  usersData: Users[] = []
  draggable = {
    // note that data is handled with JSON.stringify/JSON.parse
    // only set simple data or POJO's as methods will be lost
    data: "myDragData",
    effectAllowed: "all",
    disable: false,
    handle: false
  };

  constructor(
    private userskillsService: UserSkillsService,
    private skillsService: SkillsService,
    private usersService: UsersService,


  ) { }

  ngOnInit(): any {
    this.GetUserSkills();

  }

  // By using this method we will get the UserSkills 
  GetUserSkills(): any {
    this.userskillsService.GetUserSkills().subscribe((res: any) => {
      this.userskillsData = res;
      this.draggable.data = JSON.stringify(this.userskillsData);
      debugger
    })
  }


  onDragStart(event: DragEvent) {

    console.log("drag started", JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {

    console.log("drag ended", JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event: DragEvent) {

    console.log("draggable copied", JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {

    console.log("draggable linked", JSON.stringify(event, null, 2));
  }

  onDraggableMoved(event: DragEvent) {

    console.log("draggable moved", JSON.stringify(event, null, 2));
  }

  onDragCanceled(event: DragEvent) {

    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {

    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent) {

    console.log("dropped", JSON.stringify(event, null, 2));
  }
}

