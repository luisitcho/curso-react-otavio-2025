import React from "react";

type ContainerProps = {
    children: React.ReactNode;
    classItems?: string;
};
export function Container({ children, classItems }: ContainerProps) {
    const classes = classItems?.trim()
        ? `container ${classItems.trim()}`
        : "container";

    return <div className={classes}>{children}</div>;
}
