import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function Form() {
    return (
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
                <DefaultButton icon={<PlayCircleIcon />} color='green' />
            </fieldset>
        </form>
    );
}
