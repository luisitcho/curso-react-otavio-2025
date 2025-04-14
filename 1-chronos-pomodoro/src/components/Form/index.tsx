import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { FormEvent, useRef } from 'react';
import { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';

export function Form() {
    const { state, dispatch } = useTaskContext();
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

        dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
    }

    function handleInterruptTask() {
        dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
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
                <Tips />
            </fieldset>

            {state.currentCycle > 0 && (
                <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                    <Cycles />
                </fieldset>
            )}

            <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                {!state.activeTask && (
                    <DefaultButton
                        type='submit'
                        aria-label='Iniciar nova tarefa'
                        title='Inicias nova tarefa'
                        color='green'
                        icon={<PlayCircleIcon />}
                        key={'play-button'}
                    />
                )}

                {!!state.activeTask && (
                    <DefaultButton
                        type='button'
                        aria-label='Interromper tarefa atual'
                        title='Interromper tarefa atual'
                        color='red'
                        icon={<StopCircleIcon />}
                        onClick={handleInterruptTask}
                        key={'stop-button'}
                    />
                )}
            </fieldset>
        </form>
    );
}
