import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function Settings() {
    const { state } = useTaskContext();
    const workTimeInput = useRef<HTMLInputElement>(null);
    const shortBreakTimeInput = useRef<HTMLInputElement>(null);
    const longBreakTimeInput = useRef<HTMLInputElement>(null);

    function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const workTime = workTimeInput.current?.value;
        const shortBreakTime = shortBreakTimeInput.current?.value;
        const longBreakTime = longBreakTimeInput.current?.value;

        console.log('Settings saved:', {
            workTime,
            shortBreakTime,
            longBreakTime,
        });
    }
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
                <form
                    onSubmit={handleSaveSettings}
                    className='form flex flex-col justify-center gap-4'
                >
                    <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                        <DefaultInput
                            id='wordTIme'
                            label='Foco'
                            ref={workTimeInput}
                            defaultValue={state.config.workTime}
                        />
                    </fieldset>

                    <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                        <DefaultInput
                            id='shortBreakTime'
                            label='Descanso curto'
                            ref={shortBreakTimeInput}
                            defaultValue={state.config.shortBreakTime}
                        />
                    </fieldset>

                    <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                        <DefaultInput
                            id='longBreakTime'
                            label='Descanso longo'
                            ref={longBreakTimeInput}
                            defaultValue={state.config.longBreakTime}
                        />
                    </fieldset>

                    <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                        <DefaultButton
                            icon={<SaveIcon />}
                            type='submit'
                            aria-label='Salvar configurações'
                            title='Salvar configurações'
                        ></DefaultButton>
                    </fieldset>
                </form>
            </Container>
        </MainTemplate>
    );
}
