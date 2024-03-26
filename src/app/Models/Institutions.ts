import { InstitutionAddress } from "./InstitutionAddress";
import { InstitutionContacts } from "./InstitutionContacts";
import { InstitutionEmails } from "./InstitutionEmails";
import { InstitutionCourses } from "./InstitutionCourses";



export class Institutions
{ public Id   :number = 0; 
 public InstitutionName! :string; 
 public QulificationTypeId   :number = 0; 
 public MediumId   :number = 0; 
 public CreatedOn! :Date; 
 public CreatedBy   :number = 0;
 public UpdatedOn! :Date; 
 public UpdatedBy   :number = 0; 
 public InstitutionTypeId   :number = 0; 
 public ParentId   :number = 0; 
 public QulificationTypeName! :string; 
 public MediumName! :string; 

}


// export class InstitutionsModelss{
// public institutions!:Institutions;
// public institutionaddress!: InstitutionAddress;
// public institutioncourses!:InstitutionCourses
// public institutioncontacts!:InstitutionContacts
// public institutionemail!:InstitutionEmails

// }

export class InstitutionsDetails{
    public institutions!:Institutions;
    public institutionaddress: InstitutionAddress[]=[];
    public institutionCourses:InstitutionCourses[]=[];
    public institutioncontacts:InstitutionContacts[]=[];
    public institutionemail:InstitutionEmails[]=[];
    
    }