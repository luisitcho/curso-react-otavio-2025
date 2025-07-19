import React from 'react';
// import styles from './styles.module.css';

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export function Container({ children, ...props }: ContainerProps) {
    console.log();
    console.log(props);
    return (
        <>
            <div className='container'>
                <div className={`content ${props?.className}`}>{children}</div>
            </div>
        </>
    );
}
