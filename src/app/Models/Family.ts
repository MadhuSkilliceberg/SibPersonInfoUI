export class Family
{ public Id! :number; 
 public UserId! :number; 
 public FirstName! :string; 
 public LastName! :string; 
 public RelationTypeId! :number; 
 public IsGurdian :boolean=false; 
 public CreatedOn! :Date; 
 public CreatedBy! :number; 
 public UpdatedOn! :Date; 
 public UpdatedBy! :number; 

}