import { Home } from './pages/Home';
import { TaskStateModel } from './models/TaskStateModel';

import './scss/base/_reboot.scss';
import './main.css';
import { TaskContext } from './contexts/TaskContext';

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
    return (
        <TaskContext.Provider value={{ chave: 'default' }}>
            <Home />
        </TaskContext.Provider>
    );
}
