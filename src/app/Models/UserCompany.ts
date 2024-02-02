export class UserCompany {
    public Id: number = 0;
    public UserId: number = 0;
    public CompanyId: number = 0;
    public OfferDate   !: Date;
    public StartDate   !: Date;
    public EndDate   !: Date;
    public Salary   !: number;
    public Percentage   !: number;
    public DesignationId: number = 0;
    public Email!: string;
    public IsActive: boolean = false;
    public CreatedOn!: Date;
    public CreatedBy   !: number;
    public UpdatedOn!: Date;
    public UpdatedBy   !: number;

}