type ButtonVariants = 'default' | 'ghost' | 'danger';
type ButtonSizes = 'sm' | 'md' | 'lg';

type ButtonProps = {
    variant?: ButtonVariants;
    size?: ButtonSizes;
} & React.ComponentProps<'button'>;

export function Button({
    variant = 'default',
    size = 'md',
    ...props
}: ButtonProps) {
    const buttonVariants: Record<ButtonVariants, string> = {
        default: 'bg-blue-600 text-blue-100',
        ghost: 'bg-slate-200 text-slate-900',
        danger: 'bg-red-600 text-red-100',
    };

    const buttonSizes: Record<ButtonSizes, string> = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const buttonClasses = `${buttonVariants[variant]} ${buttonSizes[size]}`;

    return <button className={buttonClasses} {...props} />;
}