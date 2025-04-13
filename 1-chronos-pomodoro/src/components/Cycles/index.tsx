import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.scss';

export function Cycles() {
    const { state } = useTaskContext();

    const cycleStep = Array.from({ length: state.currentCycle });

    const cycleDescription = {
        workTime: 'Tempo de foco',
        shortBreakTime: 'Intervalo curto de descanso',
        longBreakTime: 'Intervalo longo de descanso',
    };

    return (
        <div
            className={`${styles.cycles} flex justify-center items-center flex-col gap-3`}
        >
            <span>Ciclos:</span>
            <div className={`${styles.cycles__dots} flex gap-2`}>
                {cycleStep.map((_, index) => {
                    const nextCycle = getNextCycle(index);
                    const nextCycleType = getNextCycleType(nextCycle);

                    return (
                        <span
                            key={index}
                            className={`
                                ${styles.item} ${styles[`item__${nextCycleType}`]}
                            `}
                            title={`Indicador de ciclo - ${cycleDescription[nextCycleType]}`}
                            aria-label={`Indicador de ciclo - ${cycleDescription[nextCycleType]}`}
                            role='status'
                        ></span>
                    );
                })}
            </div>
        </div>
    );
}
