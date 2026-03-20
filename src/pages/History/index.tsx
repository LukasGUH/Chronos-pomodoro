import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { Heading } from "../../components/Heading/intex";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { MainTemplate } from "../../templates/MainTemplate";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks } from "../../utils/sortTasks";
import styles from "./styles.module.css";

export function History() {
    const { state } = useTaskContext()
    const sortedTasks = sortTasks({ tasks: state.tasks })

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>Histórico de Tarefas</span>
                    <span className={styles.buttonContainer}>
                        <DefaultButton icon={<TrashIcon />} color="red" aria-label="Apagar o histórico" title="Apagar o histórico" />
                    </span>
                </Heading>
            </Container>

            <Container>
                <div className={styles.responsiveTable}>
                    <table>
                        <thead>
                            <tr>
                                <th>Tarefa</th>
                                <th>Duração</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sortedTasks.map(task => {
                                const taskTypeDictionary = {
                                    workTime: "Foco",
                                    shortBreakTime: "Descanço curto",
                                    longBreakTime: "Descanço longo"
                                }
                                return (
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.duration}min</td>
                                        <td>{formatDate(task.startDate)}</td>
                                        <td>{getTaskStatus(task, state.activeTask)}</td>
                                        <td>{taskTypeDictionary[task.type] || task.type}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>
        </MainTemplate>
    )
}
