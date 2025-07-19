import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'light' | 'dark';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
        return storageTheme;
    });

    const nextIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    };

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
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className={`${styles.menu} m-auto flex items-center gap-4 justify-center`}>
            <RouterLink
                href='/'
                className={styles.menu__item}
                aria-label='Ir para a página inicial'
                title='Ir para a página inicial'
            >
                <HouseIcon />
            </RouterLink>
            <RouterLink
                href='/history/'
                className={styles.menu__item}
                aria-label='Ir para o histórico'
                title='Ir para o histórico'
            >
                <HistoryIcon />
            </RouterLink>
            <RouterLink
                href='/settings/'
                className={styles.menu__item}
                aria-label='Ir para as configurações'
                title='Ir para as configurações'
            >
                <SettingsIcon />
            </RouterLink>
            <RouterLink
                href='#'
                className={styles.menu__item}
                aria-label='Alterar tema'
                title='Alterar tema'
                onClick={handleThemeChange}
            >
                {nextIcon[theme]}
            </RouterLink>
        </nav>
    );
}
