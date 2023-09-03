import { Injectable } from '@angular/core';
import { UserContacts } from '../Models/UserContacts';
import { UserAddressDetails } from '../Models/UserAddressDetails';
import { UserCompany } from '../Models/UserCompany';
import { UserCourses } from '../Models/UserCourses';
import { UserEducationDetails } from '../Models/UserEducationDetails';
import { UserEmails } from '../Models/UserEmails';
import { UserSkills } from '../Models/UserSkills';
import { UserTypes } from '../Models/UserTypes';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }



  UserObjectPush(objectType: any, objectTypeName: string): any {

    if (objectTypeName != null && objectTypeName != undefined && objectTypeName.length != 0) {
      switch (objectTypeName) {
        case 'UserContacts':
          return objectType.push(new UserContacts());
          break;
        case 'UserAddressDetails':
          return objectType.push(new UserAddressDetails());
          break;
        case 'UserCompany':
          return objectType.push(new UserCompany());
          break;
        case 'UserCourses':
          return objectType.push(new UserCourses());
          break;
        case 'UserEducationDetails':
          return objectType.push(new UserEducationDetails());
          break;
        case 'UserEmails':
          return objectType.push(new UserEmails());
          break;
        case 'UserSkills':
          return  objectType.push(new UserSkills());
          break;
        case 'UserTypes':
          return objectType.push(new UserTypes());
          break;
        default:
          console.log("No such object exists!");
          break;
      }
    }
  }


  ArrayObjectRemoveAt(objectTypeName: any, index: number):any {
   return objectTypeName.splice(index, 1);
  }
}
