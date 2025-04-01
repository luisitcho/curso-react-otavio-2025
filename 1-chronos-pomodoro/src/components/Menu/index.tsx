import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.scss';

export function Menu() {
    return (
        <nav
            className={`${styles.menu} m-auto flex items-center gap-4 justify-center`}
        >
            <a href='#' className={styles.menu__item}>
                <HouseIcon />
            </a>
            <a href='#' className={styles.menu__item}>
                <HistoryIcon />
            </a>
            <a href='#' className={styles.menu__item}>
                <SettingsIcon />
            </a>
            <a href='#' className={styles.menu__item}>
                <SunIcon />
            </a>
        </nav>
    );
}
