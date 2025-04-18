import styles from './styles.module.scss';

type DefaultInputProps = {
    id: string;
    label?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, label, ...rest }: DefaultInputProps) {
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input className={styles.input} type={type} id={id} {...rest} />
        </>
    );
}
