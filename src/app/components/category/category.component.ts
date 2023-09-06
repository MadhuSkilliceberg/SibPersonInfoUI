import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  // constructor(private categoryService: CategoryService) {

  // }

  category: Category = new Category();
  categoryData: Category[] = [];


  TreeData:any[]=[
    {
      "name": "TypeScript",
      "title": 12,
      "children": []
    },
    {
      "name": "C#",
      "title": 13,
      "children": [
        {
          "name": "DataTypes",
          "title": 1,
          "children": [
            {
              "name": "valueTypes",
              "title": 2,
              "children": [
                {
                  "name": "fraction",
                  "title": 4,
                  "children": [
                    {
                      "name": "decimal",
                      "title": 8,
                      "children": []
                    },
                    {
                      "name": "double",
                      "title": 9,
                      "children": []
                    }
                  ]
                },
                {
                  "name": "numbers",
                  "title": 5,
                  "children": [
                    {
                      "name": "int",
                      "title": 6,
                      "children": []
                    },
                    {
                      "name": "long",
                      "title": 7,
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "referanceType",
              "title": 3,
              "children": [
                {
                  "name": "string",
                  "title": 10,
                  "children": []
                },
                {
                  "name": "char",
                  "title": 11,
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    }
  ]

  ngOnInit(): void {
    //debugger
    //alert('HI')
    // throw new Error('Method not implemented.');
  }



}
