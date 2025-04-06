import sytles from './styles.module.scss';

type GenericHtmlProps = {
    children?: React.ReactNode;
};

export function GenericHtml({ children }: GenericHtmlProps) {
    return <div className={sytles.genericHtml}>{children}</div>;
}
