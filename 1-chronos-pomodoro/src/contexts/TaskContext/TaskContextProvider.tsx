import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkManager } from '../../workers/TimerWorkerManager';

type TaskContextProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);
    const worker = TimerWorkManager.getInstance();

    worker.onmessage(event => {
        const countDownSeconds = event.data;
        console.log('Message from worker:', event);

        if (countDownSeconds <= 0) {
            console.log('Task finished');
            worker.terminate();
        }
    });

    useEffect(() => {
        if (!state.activeTask) {
            console.log('No active task');
            worker.terminate();
        }

        worker.postMessage(state);
    }, [worker, state]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}
