import React from 'react';
// import styles from './styles.module.css';

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export function Container({ children, ...props }: ContainerProps) {
    return (
        <>
            <div className='container'>
                <div className={`content ${props?.className}`}>{children}</div>
            </div>
        </>
    );
}
