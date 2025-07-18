import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import './scss/base/_reboot.scss';
import './main.css';
import { Messages } from './components/Messages';
import { BrowserRouter, Route, Routes } from 'react-router';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';

export function App() {
    return (
        <TaskContextProvider>
            <Messages>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about/' element={<About />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Messages>
        </TaskContextProvider>
    );
}
