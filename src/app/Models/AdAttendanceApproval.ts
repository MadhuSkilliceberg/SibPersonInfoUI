export class AdattendanceApproval {
    AttendanceApprovalId!: number;
    AttendanceId?: number | null;
    UserId?: number | null;
    UserParentId?: number | null;
    Level?: number | null;
    CreatedOn?: Date | null;
    UpdatedOn?: Date | null;

    // User?: User | null; // Assuming User is another interface/model
}
