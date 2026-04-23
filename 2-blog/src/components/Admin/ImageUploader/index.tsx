'use client';

import { Button } from "@/components/Button";
import { ImageUpIcon } from "lucide-react";
import { useRef } from "react";

export function ImageUploader() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    function handleChooseFile() {
        if (!fileInputRef.current) return;

        fileInputRef.current.click();
    }
    return (
        <div className="flex flex-col gap-2 py-4">
            <Button type="button" className="self-start" onClick={handleChooseFile}>
                <ImageUpIcon />
                Enviar uma imagem
            </Button>
            <input ref={fileInputRef} className="hidden" type="file" name="file" accept="image/*" />
        </div>
    );
}