import { LookUpValue } from "../Models/LookUpValues";

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})


export class LookUpUtilitiesService {

    GetLookUpValues(lookUpValues: LookUpValue[], code: String, isSelect: boolean): LookUpValue[] {
        var lookupValueData: LookUpValue[] = [];
        lookupValueData.push(
            new LookUpValue()
        )
        lookUpValues.forEach(element => {
            if (element.LookUpCode == code)
                lookupValueData.push(element);
        });

        return lookupValueData;

    }

}
