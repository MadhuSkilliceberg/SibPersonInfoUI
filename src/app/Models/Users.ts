import { UserAddressDetails } from "./UserAddressDetails";
import { UserCompany } from "./UserCompany";
import { UserContacts } from "./UserContacts";
import { UserCourses } from "./UserCourses";
import { UserEducationDetails } from "./UserEducationDetails";
import { UserEmails } from "./UserEmails";
import { UserSkills } from "./UserSkills";
import { UserTypes } from "./UserTypes";

export class Users {
    public Id: number = 0;
    public FirstName!: string;
    public LastName!: string;
    public Dob!: Date;
    public GenderId: number = 0;
    public MarritalStatusId: number = 0;
    public MobileNumber!: number;
    public AadharNumber!: number;
    public VoterId!: string;
    public PanCardNumber!: string;
    public UserTypeId: number = 0;
    public CreatedOn!: Date;
    public CreatedBy: number = 0;
    public UpdatedOn!: Date;
    public UpdatedBy: number = 0;
    public ParentId?:number;

}

export class UserModel {
    public user!: Users;
    public userAddressDetails!: UserAddressDetails;
    public userCompany!: UserCompany;
    public userContacts!: UserContacts;
    public userCourses!: UserCourses;
    public userEducationDetails!: UserEducationDetails;
    public userEmails!: UserEmails;
    public userSkills!: UserSkills;
    public userTypes!: UserTypes;
}


export class UserDetail {
    public User!: Users;
    public UserAddressDetails: UserAddressDetails[] = [];
    public UserCompanies: UserCompany[] = [];
    public UserContacts: UserContacts[] = [];
    public UserCourses: UserCourses[] = [];
    public UserEducationDetails: UserEducationDetails[] = [];
    public UserEmails: UserEmails[] = [];
    public UserSkills: UserSkills[] = [];
}

export class UserCredential {
    public UserName!: string;
    public Password!: string;
}