import { QuestionOption } from "./QuestionOption";

export class Question {
    public Id !: number;
    public Guid!: string;
    public SkillId !: number;
    public QuestionTypeId!: number;
    public QuestionCategoryId!: number;
    public Question !: string;

    public CorrectAnswer !: string;
    public Weightage!: number;
    public IsPublish !: boolean
    public IsDeleted !: boolean
    public CreatedDt !: Date;
    public CreatedBy !: number;
    public ModifiedDt !: Date;
    public ModifiedBy!: number;
    public ShowEditor!: boolean;
    public QuestionOptions!: QuestionOption[];
}
