import React from 'react';
// import styles from './styles.module.css';

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export function Container({ children, ...props }: ContainerProps) {
    return (
        <>
            <div className={`container${props?.className ? ` ${props.className}` : ''}`}>
                <div className='content'>{children}</div>
            </div>
        </>
    );
}
