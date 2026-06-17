"use client";

import { ErrorMessage } from "@/components/ErrorMessage";
import { useEffect } from "react";

interface RootErrorPageProps {
    error: Error;
    reset: () => void;
}

export default function RootErroPage({ error }: RootErrorPageProps) {
    useEffect(() => {
        // console.log(error);
    }, [error]);

    return (
        <ErrorMessage
            pageTitle="Internal Server Error"
            contentTitle="501"
            content="Ocorreu um erro do qual nossa aplicação não conseguiu ser recuperar. Tente novamente mais tarde."
        />
    );
}
