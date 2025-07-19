import styles from './styles.module.scss';
import { RouterLink } from '../RouterLink';

export function Footer() {
    return (
        <footer
            className={`${styles.footer} flex flex-col items-center justify-center gap-4`}
        >
            <RouterLink
                href='/about/'
                className={`${styles.footer__link} dark:text-[#aab3cc] text-[13px] font-medium`}
            >
                Entenda como funciona a técnica pomodoro
            </RouterLink>
            <RouterLink
                href='/'
                className={`${styles.footer__link} dark:text-[#aab3cc] text-[18px] font-medium`}
            >
                Chronos Pomodoro &copy; {new Date().getFullYear()}
            </RouterLink>
        </footer>
    );
}
