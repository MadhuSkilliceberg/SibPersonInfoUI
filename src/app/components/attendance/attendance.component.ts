import { Component, OnInit } from '@angular/core';
import { Adattendance } from 'src/app/Models/AdAttendance';
import { AdAttendanceService } from 'src/app/services/adattendance/adattendance.service';
import { DateTimeHelper } from 'src/app/utilities/helpers/date-time-helper';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})


export class AttendanceComponent implements OnInit {

  attendanceRecords: Adattendance[] = [];
  attendance: Adattendance = new Adattendance();
  timeIn!: string | null;
  timeOut!: string | null;
  attendanceDate!: string;

  // attendanceRecords: any[] = [
  //   {
  //     userName: 'John Doe',
  //     date: new Date(),
  //     timeIn: new Date(),
  //     timeOut: new Date(),
  //     hoursWorked: 8,
  //     status: 'Present'
  //   },
  //   // Add more records as needed
  // ];

  // newAttendance = {
  //   userName: '',
  //   date: new Date(),
  //   timeIn: '',
  //   timeOut: '',
  //   status: 'Present'
  // };

  constructor(private attendanceService: AdAttendanceService) { }

  ngOnInit(): void {

    this.getAttendances();

  }

  addUpdateAttendance(): void {
    const timeIn = new Date(`1970-01-01T${this.timeIn}:00`);
    const timeOut = new Date(`1970-01-01T${this.timeOut}:00`);
    this.attendance.HoursWorked = (timeOut.getTime() - timeIn.getTime()) / (1000 * 60 * 60);
    this.attendance.TimeIn = timeIn;
    this.attendance.TimeOut = timeOut;
    const dateParts = this.attendanceDate.split('-'); // Assuming format "YYYY-MM-DD"
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Months are zero-based in JS Date
    const day = parseInt(dateParts[2], 10);

    this.attendance.AttendanceDate = new Date(year, month, day);

    if (this.attendance.AttendanceId != undefined && this.attendance.AttendanceId > 0) {
      this.attendanceService.UpdateAdAttendance(this.attendance).subscribe((res: any) => {
        // res ? alert("Data saved") : alert("data not saved");
      })
    }
    else {
      this.attendanceService.AddAdAttendance(this.attendance).subscribe((res: any) => {
        // res > 0 ? alert("Data saved") : alert("data not saved");
      })
    }
    this.getAttendances();
    this.attendance = new Adattendance();
    this.timeIn = '';
    this.timeOut = '';
    this.attendanceDate = '';
  }

  getAttendances() {
    this.attendanceService.GetAdAttendances().subscribe((res: Adattendance[]) => {
      this.attendanceRecords = res;
    })
  }

  editAttendance(id: any): void {
    this.attendanceService.GetAdAttendanceById(id).subscribe((res: any) => {
      this.attendance = res;
      this.timeIn = DateTimeHelper.extractTime(res.TimeIn);
      this.timeOut = DateTimeHelper.extractTime(res.TimeOut);
      this.attendanceDate = DateTimeHelper.extractDate(res.AttendanceDate);
    })
  }

  deleteAttendance(id: any): void {
    this.attendanceService.DeleteAdAttendance(id).subscribe((res: any) => {
      // res ? alert("Data deleted") : alert("data not delete");
      this.getAttendances();
    })
  }
  
}
