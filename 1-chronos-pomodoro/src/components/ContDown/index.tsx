import { HomeProps } from '../../pages/Home';
import styles from './styles.module.scss';

export function ContDown({ state }: HomeProps) {
    return <div className={styles.contdown}>{state.formattedSecondsRemaining}</div>;
}
