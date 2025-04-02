import { Container } from './components/Container';
import { ContDown } from './components/ContDown';
import { Cycles } from './components/Cycles';
import { DefaultInput } from './components/DefaultInput';
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
                <form className='form flex flex-col justify-center gap-4'>
                    <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                        <DefaultInput label='task' id='texto' type='text' />
                    </fieldset>

                    <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </fieldset>

                    <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                        <Cycles />
                    </fieldset>

                    <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                        <button type='submit'>Enviar</button>
                    </fieldset>
                </form>
            </Container>
        </>
    );
}
