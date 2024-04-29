export class LookUpValue {
    public Id: number = 0;
    public Name!: string;
    public Code!: string;
    public CreatedOn!: Date;
    public CreatedBy: number = 0;
    public UpdatedOn!: Date;
    public UpdatedBy: number = 0;
    public LookUpId: number = 0;
    public LookUpCode!: string;
    public ParentId !:number;
    

    constructor() {
        this.Id = 0;
        this.Name = '--Select--';
        this.Code = '--Select--';
        this.CreatedOn = new Date();
        this.CreatedBy = 0;
        this.UpdatedOn = new Date();
        this.UpdatedBy = 0;
        this.LookUpId = 0;
        this.LookUpCode = '';
        
    }

}

export class ddlLookUpValue {
    public Id: number = 0;
    public Name!: string;
    public Code!: string;
    public isEnable!:boolean
    public ParentId: number = 0;

}


