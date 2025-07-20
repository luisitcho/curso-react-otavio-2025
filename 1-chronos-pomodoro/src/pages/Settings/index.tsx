import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';

export function Settings() {
    const { state } = useTaskContext();
    const workTimeInput = useRef<HTMLInputElement>(null);
    const shortBreakTimeInput = useRef<HTMLInputElement>(null);
    const longBreakTimeInput = useRef<HTMLInputElement>(null);

    function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        showMessage.dismiss();

        const formErrors = [];
        const workTime = Number(workTimeInput.current?.value);
        const shortBreakTime = Number(shortBreakTimeInput.current?.value);
        const longBreakTime = Number(longBreakTimeInput.current?.value);

        if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
            formErrors.push('TODOS os campos devem ser preenchidos com números válidos.');
        }

        if (workTime < 1 || workTime > 99) {
            formErrors.push('Digite valores entre 1 e 99 para foco');
        }

        if (shortBreakTime < 1 || shortBreakTime > 30) {
            formErrors.push('Digite valores entre 1 e 30 para descanso curto');
        }

        if (longBreakTime < 1 || longBreakTime > 60) {
            formErrors.push('Digite valores entre 1 e 60 para descanso longo');
        }

        if (formErrors.length > 0) {
            formErrors.forEach(error => showMessage.error(error));
            return;
        }
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
                            type='number'
                            ref={workTimeInput}
                            defaultValue={state.config.workTime}
                            maxLength={2}
                        />
                    </fieldset>

                    <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                        <DefaultInput
                            id='shortBreakTime'
                            label='Descanso curto'
                            type='number'
                            ref={shortBreakTimeInput}
                            defaultValue={state.config.shortBreakTime}
                            maxLength={2}
                        />
                    </fieldset>

                    <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                        <DefaultInput
                            id='longBreakTime'
                            label='Descanso longo'
                            type='number'
                            ref={longBreakTimeInput}
                            defaultValue={state.config.longBreakTime}
                            maxLength={2}
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
