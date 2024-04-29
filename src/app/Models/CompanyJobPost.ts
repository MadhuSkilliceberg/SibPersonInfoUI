export class JobPost {
  Id!: number;
  Code!: string;
  Name!: string;
  Description!: string;
  LocationId!: number;
  DepartmentId!: number;
  PostedDate!: Date;
  ClosingDate!: Date;
  CreatedOn!: Date;
  CreatedBy!: number;
  UpdatedOn!: Date;
  UpdatedBy!: number;
  ScheduleShiftId!: number;
  StartDate!: Date;
  NumberofHiring!: number;
  // min_Pay!: number;
  // max_Pay!: number;
  Pay!: number;
  IsApplicationDeadLine!: boolean;
  RequireCv!: boolean;
  PhoneNumber!: string;
  IsWhatsAppUpdates!: boolean;
  DirectContact!: boolean;
}
