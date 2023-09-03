export class Family
{ public Id   :number = 0; 
 public UserId   :number = 0; 
 public FirstName! :string; 
 public LastName! :string; 
 public RelationTypeId   :number = 0; 
 public IsGurdian :boolean=false; 
 public CreatedOn! :Date; 
 public CreatedBy   :number = 0; 
 public UpdatedOn! :Date; 
 public UpdatedBy   :number = 0; 

}