import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
    const { state, setState } = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null)

    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        if (taskNameInput.current === null) return

        const taskName = taskNameInput.current.value.trim()

        if (!taskName) {
            alert('Digite o nome da tarefa')
            return
        }

        const newTask: TaskModel = { 
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType] ,
            type: nextCycleType,
        }

        const secondsRemaining = newTask.duration * 60

        setState(PrevState => {
            return {
                ...PrevState,
                config: { ...PrevState.config },
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...PrevState.tasks, newTask]
            }
        })
    } 

    return (
        <form onSubmit={handleCreateNewTask} className="form" action="">
            <div className="formRow">
                <DefaultInput
                    labelText="Task"
                    id="meuInput" 
                    type="text"
                    placeholder="Digite algo"
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                />
            </div>

            <div className="formRow">
                <p>
                    Próximo intervalo é de 25 minutos
                </p>
            </div>
            {state.currentCycle > 0 && (
                <div className="formRow">
                    <Cycles />
                </div>
            )}

            <div className="formRow">
                {!state.activeTask ? (
                    <DefaultButton 
                        aria-label="Iniciar nova tarefa" 
                        title="Iniciar nova tarefa" 
                        type="submit" 
                        icon={<PlayCircleIcon />}
                    />
                ) : (
                    <DefaultButton 
                        aria-label="Interromper tarefa atual" 
                        title="Interromper tarefa atual" 
                        type="button" 
                        color="red"
                        icon={<StopCircleIcon />}
                    />
                )}
            </div>

        </form>
    )
}