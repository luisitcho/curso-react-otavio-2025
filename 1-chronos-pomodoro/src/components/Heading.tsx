import React from 'react';
import styles from './Heading.module.scss';
import 'tailwindcss';

interface HeadingProps {
    children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
    return (
        <h1
            className={`${styles.heading} flex items-center gap-5 justify-center`}
        >
            {children}
        </h1>
    );
}
