import { useEffect, useReducer, useRef } from "react";
import { TaskStateModel } from "../../models/TaskStateModel";
import { loadBeep } from "../../utils/loadBeep";
import { TimerWorkerManager } from "../../workers/TimeWorkerManager";
import { initialTaskState } from "./initialTaskState";
import { TaskActionTypes } from "./taskActions";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
        const storedState = localStorage.getItem("state")
        if (storedState === null) return initialTaskState
        const parsedSotorageState = JSON.parse(storedState) as TaskStateModel

        return {
            ...parsedSotorageState,
            activeTask: null,
            secondsRemaining: 0,
            formattedSecondsRemaining: "00:00"
        }
    })
    const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null)

    const worker = TimerWorkerManager.getInstance()

    // eslint-disable-next-line react-hooks/refs
    worker.onmessage(e => {
        const countDownSeconds = e.data

        if (countDownSeconds <= 0) {
            if (playBeepRef.current) {
                playBeepRef.current()
                playBeepRef.current = null
            }
            dispatch({
                type: TaskActionTypes.COMPLETE_TASK
            })
            worker.terminate()
        } else {
            dispatch({
                type: TaskActionTypes.COUNT_DOWN,
                payload: { secondsRemaining: countDownSeconds }
            })
        }
    })

    useEffect(() => {

        localStorage.setItem("state", JSON.stringify(state))

        if (!state.activeTask) {
            worker.terminate()
        }
        document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`

        worker.postMessage(state)
    }, [worker, state])

    useEffect(() => {
        if (state.activeTask && playBeepRef.current === null) {
            playBeepRef.current = loadBeep()
        } else {
            playBeepRef.current = null
        }
    }, [state.activeTask])

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}
