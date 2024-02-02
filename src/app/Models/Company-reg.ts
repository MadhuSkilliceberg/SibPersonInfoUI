import { CompanyAddress } from './../Models/CompanyAddress';
import { CompanyContacts } from './../Models/CompanyContacts';
import { CompanyEmails } from './../Models/CompanyEmails';
import { CompanyReviews } from './../Models/CompanyReviews';
import { Reviews } from './Reviews';

export class Company {
        public Id: number = 0;
    public Name!: string;
    public Code!: string;
    public CreatedOn!: Date;
    public CreatedBy: number = 0;
    public UpdatedOn!: Date;
    public UpdatedBy: number = 0;

}

export class CompanyModel {
    public companys!: Company;
    public companyaddress!:CompanyAddress[];
    public companycontacts!:CompanyContacts[];
    public companyemails!:CompanyEmails[];
    public companyreviews!:CompanyReviews[];
}


export class CompanyDetail{
    public company!: Company;
    public companyaddress:CompanyAddress[]=[];
    public companycontacts:CompanyContacts[]=[];
    public companyemails:CompanyEmails[]=[];
    public companyreviews:Reviews[]=[];

}








