
export class DateTimeHelper {

  //Extracts the time part from a datetime string
  static extractTime(datetime: string): string {
    const date = new Date(datetime);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  // static extractTime(datetime: Date): Date {
  //   const hours = datetime.getHours();
  //   const minutes = datetime.getMinutes();
    
  //   // Create a new Date object with today's date and the extracted time
  //   const timeOnly = new Date();
  //   timeOnly.setHours(hours);
  //   timeOnly.setMinutes(minutes);
  //   timeOnly.setSeconds(0); // Optionally set seconds to 0
  //   timeOnly.setMilliseconds(0); // Optionally set milliseconds to 0

  //   return timeOnly;
  // }
  
  // Extracts the date part from a datetime string
  static extractDate(datetime: string): string {
    const date = new Date(datetime);
    return date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  }
}
