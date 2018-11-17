import { Pipe, PipeTransform } from '@angular/core';
import { TimerConstants } from 'src/app/model/timer-constants';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {


  static readonly NULL_TIME_SPAN = '0:00';
  static readonly INFINITE_TIME_SPAN = '?:??';

  transform(value: number, args?: any): any {
    return value === TimerConstants.NULL_TIME_SPAN ? TimeFormatPipe.NULL_TIME_SPAN
      : value === TimerConstants.INFINITE_TIME_SPAN ? TimeFormatPipe.INFINITE_TIME_SPAN
        : TimeFormatPipe.formatTime(value);
  }

  private static formatTime(value: number): string {
    const seconds = Math.floor((value / 1000) % 60);
    const millis = Math.round((value / 10) % 100);
    return `${seconds}:${TimeFormatPipe.pad(millis, 2)}`;
  }

  private static pad(n: number, size: number): string {
    const s = String(n);
    if (s.length < size) {
      const delta = size - s.length;
      return '0'.repeat(delta) + s;
    }
    return s;
  }
}
