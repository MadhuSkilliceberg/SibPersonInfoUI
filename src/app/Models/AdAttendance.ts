

// export class AdAttendance {
//     AttendanceId!: number;
//     UserId!: number | null;
//     AttendanceDate!: string | null;
//     TimeIn!: string | null;
//     TimeOut!: string | null;
//     HoursWorked!: number | null;
//     OvertimeHours!: number | null;
//     Status : string= 'Present';
//     CreatedOn!: string | null;
//     UpdatedOn!: string | null;
// }

// import { Users } from "./Users";


export class Adattendance  {
    AttendanceId: number | undefined;
    UserId?: number; // Optional field
    AttendanceDate?: Date; // Optional field
    TimeIn?: Date; // Optional field
    TimeOut?: Date; // Optional field
    HoursWorked?: number; // Optional field
    OvertimeHours?: number; // Optional field
    Status?: string='Present'; // Optional field
    CreatedOn?: Date; // Optional field
    UpdatedOn?: Date; // Optional field
    // User?: Users | null;
}