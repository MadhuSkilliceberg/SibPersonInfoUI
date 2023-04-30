export class CompanyEmails
{ public Id! :number; 
 public CompanyAddressId! :number; 
 public Email! :string; 
 public IsPrimary :boolean=false; 
 public OrderId! :number; 
 public ContactTypeId! :number; 
 public CreatedOn! :Date; 
 public CreatedBy! :number; 
 public UpdatedOn! :Date; 
 public UpdatedBy! :number; 

}