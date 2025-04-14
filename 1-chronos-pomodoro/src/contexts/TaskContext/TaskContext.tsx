import React, { createContext } from 'react';
import { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import { TaskActionModel } from './taskActions';

type taskContextProps = {
    state: TaskStateModel;
    dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
    state: initialTaskState,
    dispatch: () => {},
};

export const TaskContext = createContext<taskContextProps>(initialContextValue);
