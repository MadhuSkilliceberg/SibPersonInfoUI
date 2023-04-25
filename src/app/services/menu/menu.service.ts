import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Menu } from '../../Models/Menu';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Menu';
  }

   // By using this method we will get the Menu 
  GetMenu(): any {
    return this.http.get(this.endpointUrl+"GetMenu");
  }
  
  // By using this method we will get the Menu based on the Id
  GetMenuById(id: number): any {
    return this.http.get(this.endpointUrl+"GetMenuById/" + id);
  }

  // By uing this method we will Add the Menu based on Menu
  AddMenu(menu: Menu): any {
    return this.http.post(this.endpointUrl+"AddMenu", menu)
  }

   // By uing this method we will Update the Menu based on Menu
   UpdateMenu(menu: Menu): any {
    return this.http.put(this.endpointUrl+"UpdateMenu", menu)
  }

// By using this method we will delete the Menu based on the Id
DeleteMenu(id: number): any {
    return this.http.delete(this.endpointUrl+"DeleteMenu/" + id);
  }
}
