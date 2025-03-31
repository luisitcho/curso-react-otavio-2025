import React from 'react';
import styles from './Heading.module.scss';
interface HeadingProps {
    children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
    return (
        <h1
            className={`${styles.heading} flex items-center gap-5 justify-center text-[20px] xl:text-[25px] font-medium`}
        >
            {children}
        </h1>
    );
}
