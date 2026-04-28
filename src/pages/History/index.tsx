import { TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { showMessage } from "../../adapters/showMassage";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { Heading } from "../../components/Heading/intex";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { MainTemplate } from "../../templates/MainTemplate";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, SortTasksOptions } from "../../utils/sortTasks";
import styles from "./styles.module.css";

export function History() {
    const { state, dispatch } = useTaskContext()
    const hasTasks = state.tasks.length > 0
    const [confirmClearHistory, setConfirmClearHistory] = useState(false);
    const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(() => {
        return {
            tasks: sortTasks({ tasks: state.tasks }),
            field: "startDate",
            direction: "desc"
        }
    })

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSortTasksOptions(prevState => ({
            ...prevState,
            tasks: sortTasks({
                tasks: state.tasks,
                direction: prevState.direction,
                field: prevState.field,
            }),
        }));
    }, [state.tasks]);

    useEffect(() => {
        document.title = "Historico - Chronos Pomodoro";
    }, [])

    useEffect(() => {
        document.title = 'Histórico - Chronos Pomodoro';
    }, []);

    useEffect(() => {
        if (!confirmClearHistory) return;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setConfirmClearHistory(false);

        dispatch({ type: TaskActionTypes.RESET_STATE });
    }, [confirmClearHistory, dispatch]);

    useEffect(() => {
        return () => {
            showMessage.dissmiss()
        }
    }, [])

    function handleSortTasks({ field }: Pick<SortTasksOptions, "field">) {
        const newDirection = sortTasksOptions.direction === "desc" ? "asc" : "desc"

        setSortTasksOptions({
            tasks: sortTasks({
                direction: newDirection,
                tasks: sortTasksOptions.tasks,
                field,
            }),
            direction: newDirection,
            field,
        })
    }

    function handleResetHistory() {
        showMessage.dissmiss()
        showMessage.confirm("Tem certeza que deseja apagar o histórico?", (confirmation) => {
            setConfirmClearHistory(confirmation)
        })

    }

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>History</span>
                    {hasTasks && (
                        <span className={styles.buttonContainer}>
                            <DefaultButton icon={<TrashIcon />} color="red" aria-label="Apagar o histórico" title="Apagar o histórico" onClick={handleResetHistory} />
                        </span>
                    )}
                </Heading>
            </Container>

            <Container>
                {hasTasks && (
                    <div className={styles.responsiveTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th onClick={() => handleSortTasks({ field: "name" })} className={styles.thSort}>Tarefa ⇅</th>
                                    <th onClick={() => handleSortTasks({ field: "duration" })} className={styles.thSort}>Duração ⇅</th>
                                    <th onClick={() => handleSortTasks({ field: "startDate" })} className={styles.thSort}>Data ⇅</th>
                                    <th>Status</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>

                            <tbody>
                                {sortTasksOptions.tasks.map(task => {
                                    const taskTypeDictionary = {
                                        workTime: "Foco",
                                        shortBreakTime: "Descanso curto",
                                        longBreakTime: "Descanso longo"
                                    }
                                    return (
                                        <tr key={task.id}>
                                            <td>{task.name}</td>
                                            <td>{task.duration}min</td>
                                            <td>{formatDate(task.startDate)}</td>
                                            <td>{getTaskStatus(task, state.activeTask)}</td>
                                            <td>{taskTypeDictionary[task.type]}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
                {!hasTasks && (
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>Nenhuma tarefa registrada ainda.</p>
                )}
            </Container>
        </MainTemplate>
    )
}
