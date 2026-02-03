import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeDate: number | null;
    interrupteDate: number | null;
    type: keyof TaskStateModel["config"];
}