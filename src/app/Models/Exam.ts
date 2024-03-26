 
export class Exam {
  public Id: number = 0;
  public Name!: string;
   
  public SkillId: number = 0;
  public ExamTypeId: number = 0;
  public ExamCategoryId: number = 0;
   
  public IsPublish: boolean = false;
  public UserId: number = 0;
  public CreatedOn!: Date;
  public CreatedBy: number = 0;
  public CreatedByName!: string;
  public UpdatedOn!: Date;
  public UpdatedBy: number = 0;
   

}