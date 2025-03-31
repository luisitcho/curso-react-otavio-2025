import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
    return (
        <>
            <Heading>
                Olá Mundo 1!{' '}
                <button>
                    <TimerIcon />
                </button>
            </Heading>
        </>
    );
}
