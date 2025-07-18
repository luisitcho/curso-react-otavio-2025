import { Link } from 'react-router';
import styles from './styles.module.scss';

export function Footer() {
    return (
        <footer
            className={`${styles.footer} flex flex-col items-center justify-center gap-4`}
        >
            <Link
                to='/about/'
                className={`${styles.footer__link} dark:text-[#aab3cc] text-[13px] font-medium`}
            >
                Entenda como funciona a técnica pomodoro
            </Link>
            <Link
                to='/'
                className={`${styles.footer__link} dark:text-[#aab3cc] text-[18px] font-medium`}
            >
                Chronos Pomodoro &copy; {new Date().getFullYear()}
            </Link>
        </footer>
    );
}
