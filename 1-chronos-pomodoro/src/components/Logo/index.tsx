import { TimerIcon } from 'lucide-react';
import styles from './styles.module.scss';

export function Logo() {
    return (
        <>
            <div
                className={`${styles.logo} flex items-center justify-center mt-10`}
            >
                <a
                    href='#'
                    className={`${styles.logo__link} logo flex flex-col items-center justify-center gap-4 decoration-none`}
                >
                    <TimerIcon />
                    <span className='font-bold text-[25px] xl:text-[35px]'>
                        Chronos
                    </span>
                </a>
            </div>
        </>
    );
}
