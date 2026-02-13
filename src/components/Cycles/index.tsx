import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"
import styles from "./styles.module.css"

export function Cycles() {

    const {state} = useTaskContext()

    const cycleStep = Array.from({length: state.currentCycle})

    const cycleDescriptionMap = {
        workTime: "foco",
        shortBreakTime: "descanso curto",
        longBreakTime: "descanso longo"
    }


    return (
        <div className={styles.cycles}>
            <span>Ciclos:</span>

            <div className={styles.cycleDots}>
                {cycleStep.map((_, index) => {
                    const nextCycle = getNextCycle(index)
                    const nextCycleType = getNextCycleType(nextCycle)
                    // console.log(index)
                    return (
                        <span 
                            key={nextCycle}
                            className={`${styles.cycleDot} ${styles[nextCycleType]}`}
                            aria-label={`indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                            title={`indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                        ></span>
                    )
                })}
            </div>
        </div>
    )
}