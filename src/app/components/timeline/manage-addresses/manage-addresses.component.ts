import { Component, OnInit } from '@angular/core';
import { UserAddressDetails } from 'src/app/Models/UserAddressDetails';
import { UserAddressDetailsService } from 'src/app/services/useraddressdetails/useraddressdetails.service';

@Component({
  selector: 'app-manage-addresses',
  templateUrl: './manage-addresses.component.html',
  styleUrls: ['./manage-addresses.component.css']
})
export class ManageAddressesComponent implements OnInit {

  userAddress: UserAddressDetails[] = [];
  constructor(private useraddservice: UserAddressDetailsService) {

  }
  ngOnInit(): void {
    this.GetUserAddressDetails();
  }



  GetUserAddressDetails() {
    this.useraddservice.GetUserAddressDetails().subscribe((resp: any) => {
this.userAddress=resp;
    }

    )


  }



}
