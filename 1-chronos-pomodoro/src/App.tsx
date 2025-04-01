import { Container } from './components/Container';
import { ContDown } from './components/ContDown';
import { Form } from './components/Form';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <ContDown />
            </Container>

            <Container>
                <Form />
            </Container>
        </>
    );
}
