import { Home } from './pages/Home';
import { TaskStateModel } from './models/TaskStateModel';

import './scss/base/_reboot.scss';
import './main.css';
import { TaskContextProvider } from './contexts/TaskContext';
import { useState } from 'react';

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    },
};

export function App() {
    const [state, setState] = useState(initialState);

    return (
        <TaskContextProvider>
            <Home />
        </TaskContextProvider>
    );
}
