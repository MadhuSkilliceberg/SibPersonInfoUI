import { UserAddressDetails } from "./UserAddressDetails";
import { UserContacts } from "./UserContacts";
import { UserEmails } from "./UserEmails";

export class Skill {
    public SkillId!: number;
    public DetailType!: string;
    public DetailValue!:Skill  ;
}

export class Contact {
    public ContactId!: number;
    public DetailType!: string;
    public DetailValue!: UserContacts ;
}
export class Email {
    public EmailId!: number;
    public DetailType!: string;
    public DetailValue!:  UserEmails;
}

export class AddressDetail {
    public AddressDetailId!: number;
    public DetailType!: string;
    public DetailValue!: UserAddressDetails
}

export class Course {
    public CourseId!: number;
    public Name!: string;
}

export class EducationDetail {
    public EducationId!: number;
    public Degree!: string;
}

export class Company {
    public CompanyId!: number;
    public Name!: string;
}

export class User {
    public UserName!: string;
    public Skills!: Skill[];
    public Contacts!: Contact[];
    public Emails!: Email[];
    public Courses!: Course[]; // Replace 'Course' with the actual type if needed
    public EducationDetails!: EducationDetail[]; // Replace 'EducationDetail' with the actual type if needed
    public Companies!: Company[]; // Replace 'Company' with the actual type if needed
    public AddressDetails!: AddressDetail[];
}

export class UserData {
    public UsersData!: User[];
}
