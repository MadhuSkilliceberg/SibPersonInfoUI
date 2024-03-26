import { QuestionOption } from "./QuestionOption";

export class ExamQuestion {
    public Id !: number;
    public Guid!: string;
    public UserId !: number;
    public ExamId!: number;
    public QuestionId!: number;
    public QuestionName!: string;
    public MarkAsReview!: number;
    public Answer!: string;
    public StatusId!: number;
    public IsDeleted !: boolean
    public CreatedDt !: Date;
    public CreatedBy !: number;
    public ModifiedDt !: Date;
    public ModifiedBy!: number;
    public ShowEditor!: boolean;
    public QuestionOption!: QuestionOption[];
    public IsShow: boolean=false;
}
