export class UserEmails {
    public Id: number = 0;
    public UserId: number = 0;
    public Email!: string;
    public IsPrimary: boolean = false;
    public OrderId!: number;
    public TypeId: number = 0;
    public CreatedOn!: Date;
    public CreatedBy: number = 0;
    public UpdatedOn!: Date;
    public UpdatedBy: number = 0;

}