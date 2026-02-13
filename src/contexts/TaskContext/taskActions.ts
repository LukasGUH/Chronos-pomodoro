import type { TaskModel } from "../../models/TaskModel"

export enum TaskActionTypes {
    START_TASK = "START_TASK",
    INTERRUPT_TASK = "INTERRUPT_TASK",
    RESET_TASK = "RESET_TASK"
}

export type TaskActionsWithPayload =
    {
        type: TaskActionTypes.START_TASK,
        payload: TaskModel
    }

export type TaskActionWithoutPayload =
    | {
        type: TaskActionTypes.RESET_TASK
    }
    | {
        type: TaskActionTypes.INTERRUPT_TASK
    }


export type TaskActionModel =
    | TaskActionsWithPayload
    | TaskActionWithoutPayload