 export class CompanyReviewsCommentModel {
    public Id!: number;
    public UserId!: number;
    public Heading!: string;
    public Description!:string ;
    public Rating!: number;
    public IsActive!: boolean;
    public IsPublic!: boolean;
    public AccessLevel!: number;
    public ParentId!: number;
    public CreatedOn!: Date;
    public CreatedBy!: number;
    public UpdatedOn!: Date;
    public UpdatedBy!: number;
    public children!: CompanyReviewsCommentModel[];
}
 