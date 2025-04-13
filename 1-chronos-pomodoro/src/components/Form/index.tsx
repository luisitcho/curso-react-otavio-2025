import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { FormEvent, useRef } from 'react';
import { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function Form() {
    const { state, setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);

    // Ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleCreateNewTask(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            alert('Please enter a task name');
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        };

        const secondsRemaining = newTask.duration * 60;

        setState(prevState => {
            return {
                ...prevState,
                config: { ...prevState.config },
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask],
            };
        });
    }

    return (
        <form
            className='form flex flex-col justify-center gap-4'
            onSubmit={handleCreateNewTask}
        >
            <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                <DefaultInput
                    label='task'
                    id='texto'
                    type='text'
                    placeholder='Digite aqui sua tarefa'
                    ref={taskNameInput}
                    disabled={!!state.activeTask}
                />
            </fieldset>

            <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                <p>Lorem ipsum dolor sit amet.</p>
            </fieldset>

            {state.currentCycle > 0 && (
                <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                    <Cycles />
                </fieldset>
            )}

            <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                {!state.activeTask ? (
                    <DefaultButton
                        type='submit'
                        aria-label='Iniciar nova tarefa'
                        title='Inicias nova tarefa'
                        icon={<PlayCircleIcon />}
                        color='green'
                    />
                ) : (
                    <DefaultButton
                        type='button'
                        aria-label='Interromper tarefa atual'
                        title='Interromper tarefa atual'
                        icon={<StopCircleIcon />}
                        color='red'
                    />
                )}
            </fieldset>
        </form>
    );
}
