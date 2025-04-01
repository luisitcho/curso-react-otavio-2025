import styles from './styles.module.scss';

export function Form() {
    console.log(styles);
    return (
        <form
            className={`${styles.form} form flex flex-col justify-center gap-4`}
        >
            <fieldset
                className={`${styles.fieldset} fieldset flex flex-col justify-center items-center gap-4`}
            >
                <label htmlFor='texto'>task</label>
                <input type='text' id='texto' />
            </fieldset>

            <fieldset
                className={`${styles.fieldset} fieldset flex flex-col justify-center items-center gap-4`}
            >
                <p>Lorem ipsum dolor sit amet.</p>
            </fieldset>

            <fieldset
                className={`${styles.fieldset} fieldset flex flex-col justify-center items-center gap-4`}
            >
                <p>Ciclos</p>
                <p>0 0 0 0 0</p>
            </fieldset>

            <fieldset
                className={`${styles.fieldset} fieldset flex flex-col justify-center items-center gap-4`}
            >
                <button type='submit'>Enviar</button>
            </fieldset>
        </form>
    );
}
