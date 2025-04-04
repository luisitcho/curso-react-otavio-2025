import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.scss';
import { useState, useEffect } from 'react';

type AvailableThemes = 'light' | 'dark';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
        event?.preventDefault();
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return newTheme;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <nav className={`${styles.menu} m-auto flex items-center gap-4 justify-center`}>
            <a
                href='#'
                className={styles.menu__item}
                aria-label='Ir para a página inicial'
                title='Ir para a página inicial'
            >
                <HouseIcon />
            </a>
            <a
                href='#'
                className={styles.menu__item}
                aria-label='Ir para o histórico'
                title='Ir para o histórico'
            >
                <HistoryIcon />
            </a>
            <a
                href='#'
                className={styles.menu__item}
                aria-label='Ir para as configurações'
                title='Ir para as configurações'
            >
                <SettingsIcon />
            </a>
            <a
                href='#'
                className={styles.menu__item}
                aria-label='Alterar tema'
                title='Alterar tema'
                onClick={handleThemeChange}
            >
                <SunIcon />
            </a>
        </nav>
    );
}
