type LoaderProps = {
    classItems?: string;
};

export function Loader({ classItems }: LoaderProps) {
    const classes = classItems?.trim()
        ? `loader ${classItems.trim()}`
        : "loader";

    return (
        <div className={classes} role="status">
            <div className="w-10 h-10 my-16 border-5 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}
