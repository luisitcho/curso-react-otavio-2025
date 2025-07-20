import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function Settings() {
    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p className='text-center font-medium'>
                    Modifique as configurações para tempo de foco, descanso curso e
                    descanso longo.
                </p>
            </Container>

            <Container>
                <form className='form flex flex-col justify-center gap-4'>
                    <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                        <DefaultInput id='wordTIme' label='Foco' />
                    </fieldset>

                    <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                        <DefaultInput id='shortBreakTime' label='Descanso curto' />
                    </fieldset>

                    <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                        <DefaultInput id='longBreakTime' label='Descanso longo' />
                    </fieldset>

                    <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                        <DefaultButton
                            icon={<SaveIcon />}
                            type='button'
                            aria-label='Salvar configurações'
                            title='Salvar configurações'
                        ></DefaultButton>
                    </fieldset>
                </form>
            </Container>
        </MainTemplate>
    );
}
