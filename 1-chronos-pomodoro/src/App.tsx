import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Messages } from './components/Messages';
import { MainRouter } from './routers/MainRouter';

import './scss/base/_reboot.scss';
import './main.css';

export function App() {
    return (
        <TaskContextProvider>
            <Messages>
                <MainRouter />
            </Messages>
        </TaskContextProvider>
    );
}
