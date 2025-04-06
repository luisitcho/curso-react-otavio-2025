import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import './scss/base/_reboot.scss';
import './main.css';

export function App() {
    return (
        <TaskContextProvider>
            <Home />
        </TaskContextProvider>
    );
}
