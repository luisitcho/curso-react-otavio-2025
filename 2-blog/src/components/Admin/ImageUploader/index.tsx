'use client';

import { Button } from "@/components/Button";
import { IMAGE_UPLOADER_MAX_SIZE } from "@/lib/constants";
import { fi } from "date-fns/locale";
import { ImageUpIcon } from "lucide-react";
import { useRef } from "react";
import { toast } from "react-toastify";

export function ImageUploader() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    function handleChooseFile() {
        if (!fileInputRef.current) return;

        fileInputRef.current.click();
    }

    function handleChange() {
        if (!fileInputRef.current) return;

        const file = fileInputRef.current.files?.[0];

        if (!file) return;

        if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
            const maxSizeInKB = IMAGE_UPLOADER_MAX_SIZE / 1024;
            toast.error(`O arquivo é muito grande. O tamanho máximo permitido é ${maxSizeInKB}KB.`);

            fileInputRef.current.value = ""; // Limpa o input para permitir nova seleção
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        console.log(formData.get("file")); // Verifica se o arquivo foi adicionado corretamente

        fileInputRef.current.value = ""; // Limpa o input para permitir nova seleção


        // Aqui você pode enviar o formData para o servidor usando fetch ou axios
        // Exemplo:
        // fetch('/api/upload', {
        //     method: 'POST',
        //     body: formData,
        // }).then(response => {
        //     // Lidar com a resposta do servidor
        // }).catch(error => {
        //     // Lidar com erros
        // });
    }

    return (
        <div className="flex flex-col gap-2 py-4">
            <Button type="button" className="self-start" onClick={handleChooseFile}>
                <ImageUpIcon />
                Enviar uma imagem
            </Button>
            <input onChange={handleChange} ref={fileInputRef} className="hidden" type="file" name="file" accept="image/*" />
        </div>
    );
}