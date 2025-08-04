"use client";

import React, { useEffect, useState } from "react";

type ErrorMessageProps = {
    pageTitle: string;
    contentTitle: string;
    content: React.ReactNode;
};

export function ErrorMessage({
    pageTitle,
    contentTitle,
    content,
}: ErrorMessageProps) {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [footerHeight, setFooterHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector(".header");
        const footer = document.querySelector(".footer");

        if (header) setHeaderHeight((header as HTMLElement).offsetHeight);
        if (footer) setFooterHeight((footer as HTMLElement).offsetHeight);
    }, []);

    return (
        <>
            <title>{pageTitle}</title>
            <div>
                <div
                    className="text-center flex flex-col items-center justify-center"
                    style={{
                        minHeight: `calc(100vh - ${
                            headerHeight + footerHeight + 100
                        }px)`,
                    }}
                >
                    <h2 className="text-4xl/normal sm:text-5xl/normal md:text-6xl/normal lg:text-7xl/normal mb-4 font-extrabold">
                        {contentTitle}
                    </h2>
                    <div>{content}</div>
                </div>
            </div>
        </>
    );
}
