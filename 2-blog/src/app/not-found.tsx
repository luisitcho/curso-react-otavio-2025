"use client";

import { Container } from "@/components/Container";
import { useEffect, useState } from "react";

export default function NotFound() {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [footerHeight, setFooterHeight] = useState(0);

    useEffect(() => {
        const header = document.querySelector(".header");
        const footer = document.querySelector(".footer");

        if (header) setHeaderHeight((header as HTMLElement).offsetHeight);
        if (footer) setFooterHeight((footer as HTMLElement).offsetHeight);
    }, []);

    console.log(headerHeight);
    console.log(footerHeight);

    return (
        <div className="notFound">
            <Container>
                <div
                    className="text-center flex flex-col items-center justify-center"
                    style={{
                        minHeight: `calc(100vh - ${
                            headerHeight + footerHeight + 100
                        }px)`,
                    }}
                >
                    <h2 className="text-4xl/normal sm:text-5xl/normal md:text-6xl/normal lg:text-7xl/normal mb-4 font-extrabold">
                        404
                    </h2>
                    <p>
                        Erro 404 - A página que você está tentando acessar não
                        existe neste site.
                    </p>
                </div>
            </Container>
        </div>
    );
}
