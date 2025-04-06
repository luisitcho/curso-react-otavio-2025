import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { HomeProps } from '../../pages/Home';

export function Form({ state }: HomeProps) {
    return (
        <form className='form flex flex-col justify-center gap-4'>
            <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                <DefaultInput label='task' id='texto' type='text' />
            </fieldset>

            <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                <p>INtervalo de {state.config.workTime}</p>
            </fieldset>

            <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                <Cycles />
            </fieldset>

            <fieldset className='fieldset flex flex-col justify-center items-center gap-4'>
                <button type='submit'>Enviar</button>
                <DefaultButton icon={<PlayCircleIcon />} color='green' />
            </fieldset>
        </form>
    );
}
