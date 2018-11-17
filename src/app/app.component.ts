import { Component } from '@angular/core';
import { TimerService } from './core/service/timer.service';
import { Stage } from './core/stage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eon Timer';

  constructor(private timer: TimerService) {
    this.timer.updateStages([
      Stage.create(5000),
      Stage.create(4000),
      Stage.create(3000),
      Stage.create(2000),
      Stage.create(1000)
    ]);
  }
}
