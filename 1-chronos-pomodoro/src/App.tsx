import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
    return (
        <div className='container mx-auto'>
            <Heading>
                Olá Mundo 1!{' '}
                <button>
                    <TimerIcon />
                </button>
            </Heading>
        </div>
    );
}
