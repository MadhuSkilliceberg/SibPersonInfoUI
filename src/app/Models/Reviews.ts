export class Reviews
{ public Id! :number; 
 public Heading! :string; 
 public Description! :string; 
 public Rating! :number; 
 public IsActive :boolean=false; 
 public IsPublic :boolean=false; 
 public AccessLevel! :number; 
 public CreatedOn! :Date; 
 public CreatedBy! :number; 
 public UpdatedOn! :Date; 
 public UpdatedBy! :number; 

}