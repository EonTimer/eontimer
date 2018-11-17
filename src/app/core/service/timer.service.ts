import { Injectable } from '@angular/core';
import { Stage } from '../stage';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private _stages: ReadonlyArray<Stage> = Object.freeze([]);
  private _remainingMillis: number;
  private _millisBeforeTarget = 0;
  private _elapsedMillis = 0;

  private currentStageIndex: number;
  private timerHandler: number;

  constructor() { }

  updateStages(stages: Stage[]): void {
    this._stages = Object.freeze(stages);
    this.reset();
  }

  private getStage(index: number): Stage {
    return this._stages.length > index ? this._stages[index] : Stage.NULL_STAGE;
  }

  start(): void {
    let lastTimestamp = Date.now();
    this.timerHandler = window.setInterval(() => {
      if (!this.running) {
        const now = Date.now();
        const elapsed = now - lastTimestamp;

        this._elapsedMillis += elapsed;
        this._remainingMillis -= elapsed;
        if (this._remainingMillis <= 0) {
          if (this.nextStage !== Stage.NULL_STAGE) {
            this.currentStageIndex++;
            this._remainingMillis = this.currentStage.length + this._remainingMillis;
          } else {
            this.stop();
          }
        }
        lastTimestamp = now;
      }
    }, 8);
  }

  stop(): void {
    if (this.running) {
      window.clearInterval(this.timerHandler);
      this.timerHandler = undefined;
      this.reset();
    }
  }

  private reset(): void {
    this.currentStageIndex = 0;
    this._remainingMillis = this.currentStage.length;
    this._millisBeforeTarget = this._stages
      .map(stage => stage.length)
      .reduce((x, y) => x + y, 0);
    this._elapsedMillis = 0;
  }

  get stages(): ReadonlyArray<Stage> {
    return this._stages;
  }

  get currentStage(): Stage {
    return this.getStage(this.currentStageIndex);
  }

  get nextStage(): Stage {
    return this.getStage(this.currentStageIndex + 1);
  }

  get remainingMillis(): number {
    return this._remainingMillis;
  }

  get remainingPercentage(): number {
    return (this._remainingMillis / this.currentStage.length) * 100;
  }

  get minutesBeforeTarget(): number {
    return Math.floor((this._millisBeforeTarget - this._elapsedMillis) / 60000);
  }

  get running(): boolean {
    return this.timerHandler !== undefined;
  }
}
