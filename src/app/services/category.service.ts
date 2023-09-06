import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  endpointUrl!: string;
  constructor(private http: HttpClient) {
    this.endpointUrl = environment.baseUrl + 'Category/';
  }

  // By using this method we will get the Category 
  GetCategory(): any {
    return this.http.get(this.endpointUrl + "GetCategory");
  }

  // By using this method we will get the Category based on the Id
  GetCategoryById(id: number): any {
    return this.http.get(this.endpointUrl + "GetCategoryById/" + id);
  }

  // By uing this method we will Add the Category based on Category
  AddCategory(Category: Category): any {
    return this.http.post(this.endpointUrl + "AddCategory", Category)
  }

  // By uing this method we will Update the Category based on Category
  UpdateCategory(Category: Category): any {
    return this.http.put(this.endpointUrl + "UpdateCategory", Category)
  }

  // By using this method we will delete the Category based on the Id
  DeleteCategory(id: number): any {
    return this.http.delete(this.endpointUrl + "DeleteCategory/" + id);
  }

// By using this method we will the Categories Tree Hierarchical
  GetTreeHierarchical(): any {
    return this.http.get(this.endpointUrl + "TreeHierarchical");
  }
}
