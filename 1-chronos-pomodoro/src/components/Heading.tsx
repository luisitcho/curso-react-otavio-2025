import styles from './Heading.module.scss';

interface HeadingProps {
    teste?: string;
    attr?: number;
    children: React.ReactNode;
}

export function Heading(props: HeadingProps) {
    console.log(props);
    return (
        <h1
            className={styles.heading}
            aria-label={props.teste}
            aria-hidden={props.attr ? 'true' : 'false'}
        >
            {props.children}
        </h1>
    );
}
