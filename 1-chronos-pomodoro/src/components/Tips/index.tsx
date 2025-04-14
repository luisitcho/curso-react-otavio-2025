import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
    const { state } = useTaskContext();

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    const tipsForWhenActiveTask = {
        workTime: (
            <span>
                Foque por <span className='font-medium'>{state.config.workTime}min</span>
            </span>
        ),
        shortBreakTime: (
            <span>
                Próximo descanso é de{' '}
                <span className='font-medium'>{state.config.shortBreakTime}min</span>
            </span>
        ),
        longBreakTime: <span>Descanso longo</span>,
    };

    const tipsForNoActiveTask = {
        workTime: (
            <span>
                Proximo ciclo é de{' '}
                <span className='font-medium'>{state.config.workTime}min</span>
            </span>
        ),
        shortBreakTime: (
            <span>
                Proximo ciclo é de{' '}
                <span className='font-medium'>{state.config.shortBreakTime}min</span>
            </span>
        ),
        longBreakTime: <span>Próximo descanso será longo</span>,
    };

    return (
        <>
            {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
        </>
    );
}
