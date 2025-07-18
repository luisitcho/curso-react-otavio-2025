import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import './scss/base/_reboot.scss';
import './main.css';
import { Messages } from './components/Messages';

export function App() {
    return (
        <TaskContextProvider>
            <Messages>
                <Home />
            </Messages>
        </TaskContextProvider>
    );
}
