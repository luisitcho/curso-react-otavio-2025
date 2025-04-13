import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { FormEvent, useRef } from 'react';
import { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function Form() {
    const { setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);

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
            duration: 1,
            type: 'workTime',
        };

        const secondsRemaining = newTask.duration * 60;

        setState(prevState => {
            return {
                ...prevState,
                config: { ...prevState.config },
                activeTask: newTask,
                secondsRemaining,
                formattedSecondsRemaining: '00:00',
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
                />
            </fieldset>

            <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                <p>Lorem ipsum dolor sit amet.</p>
            </fieldset>

            <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                <Cycles />
            </fieldset>

            <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                <button type='submit'>Enviar</button>
                <DefaultButton icon={<PlayCircleIcon />} color='green' />
            </fieldset>
        </form>
    );
}
