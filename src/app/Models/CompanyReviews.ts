export class CompanyReviews {
    public Id: number = 0;
    public CompanyId: number = 0;
    public ReviewId: number = 0;
    public CreatedOn!: Date;
    public CreatedBy: number = 0;
    public UpdatedOn!: Date;
    public UpdatedBy: number = 0;
    public UpdatedByName!: string ;
    

    public Heading!: string;
    public Description!: string;
    public Rating: number = 0;
    public IsActive: boolean = false;
    public IsPublic: boolean = false;
    public AccessLevel: number = 0;
    public TotalComments: number = 0;

}