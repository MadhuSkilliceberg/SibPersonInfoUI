export class UserCompany
{ public Id! :number; 
 public UserId! :number; 
 public CompanyId! :number; 
 public YearOfPassout! :number; 
 public StartYear! :number; 
 public EndYear! :number; 
 public Salary! :number; 
 public Percentage! :number; 
 public DesignationId! :number; 
 public Email! :string; 
 public IsActive :boolean=false; 
 public CreatedOn! :Date; 
 public CreatedBy! :number; 
 public UpdatedOn! :Date; 
 public UpdatedBy! :number; 

}