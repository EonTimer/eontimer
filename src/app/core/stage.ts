import { TimerConstants } from '../model/timer-constants';

export interface Stage {
    readonly length: number;
}

export namespace Stage {
    export function create(length: number): Stage {
        return { length };
    }

    export const NULL_STAGE: Stage = Stage.create(TimerConstants.NULL_TIME_SPAN);
    export const INFINITE_STAGE: Stage = Stage.create(TimerConstants.INFINITE_TIME_SPAN);
}
