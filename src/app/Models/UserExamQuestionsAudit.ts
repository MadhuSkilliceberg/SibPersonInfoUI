 
export class UserExamQuestionsAudit {
  public Id: number = 0;
  public Name!: string;
   
  public UserId: number = 0;
  public UserExamQuestionId: number = 0;
  public StatusId: number = 0;
   
  public IsActive: boolean = false;
   
  public CreatedOn!: Date;
  public CreatedBy: number = 0;
  public CreatedByName!: string;
  public UpdatedOn!: Date;
  public UpdatedBy: number = 0;
   

}