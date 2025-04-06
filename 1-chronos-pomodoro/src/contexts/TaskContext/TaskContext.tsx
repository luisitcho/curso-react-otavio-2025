import { createContext } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';

type taskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
    state: initialTaskState,
    setState: () => {},
};

export const TaskContext = createContext<taskContextProps>(initialContextValue);
