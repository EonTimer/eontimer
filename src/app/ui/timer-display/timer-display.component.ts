import { Component } from '@angular/core';
import { TimerService } from 'src/app/core/service/timer.service';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss']
})
export class TimerDisplayComponent {

  constructor(protected timer: TimerService) {
  }
}
