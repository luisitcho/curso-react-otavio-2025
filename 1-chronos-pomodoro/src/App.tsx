import { Heading } from './components/Heading';

import './App.css';
import './scss/style.scss';

export function App() {
    return (
        <>
            <Heading attr={124} teste={'String'}>
                Olá Mundo 1!
            </Heading>
            <Heading>Olá Mundo 2!</Heading>
            <Heading>Olá Mundo 3!</Heading>
        </>
    );
}
