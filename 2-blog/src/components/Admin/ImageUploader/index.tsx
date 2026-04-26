'use client';

import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { Button } from "@/components/Button";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants";
import { ImageUpIcon } from "lucide-react";
import { useRef, useState, useTransition } from 'react';
import { toast } from "react-toastify";

type ImageUploaderProps = {
    disabled?: boolean;
};

export function ImageUploader({ disabled = false }: ImageUploaderProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploading, startTransition] = useTransition();
    const [imgUrl, setImgUrl] = useState('');

    function handleChooseFile() {
        if (!fileInputRef.current) return;

        fileInputRef.current.click();
    }

    function handleChange() {
        toast.dismiss();

        if (!fileInputRef.current) {
            setImgUrl('');
            return;
        }

        const file = fileInputRef.current.files?.[0];


        if (!file) {
            setImgUrl('');
            return;
        }

        if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
            const maxSizeInKB = IMAGE_UPLOAD_MAX_SIZE / 1024;
            toast.error(`O arquivo é muito grande. O tamanho máximo permitido é ${maxSizeInKB}KB.`);

            fileInputRef.current.value = ""; // Limpa o input para permitir nova seleção
            setImgUrl('');
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        console.log(formData.get("file")); // Verifica se o arquivo foi adicionado corretamente]

        startTransition(async () => {
            // Aqui posso chamar a função de upload, por exemplo:

            const result = await uploadImageAction(formData);

            if (result.error) {
                toast.error("Falha ao enviar a imagem. " + result.error);
                return;
            }

            setImgUrl(result.url);
            toast.success("Imagem enviada com sucesso! URL: " + result.url);
        });

        fileInputRef.current.value = "";
    }

    return (
        <div className="flex flex-col gap-2 py-4">
            <Button type="button" className="self-start" onClick={handleChooseFile} disabled={isUploading || disabled}>
                <ImageUpIcon />
                Enviar uma imagem
            </Button>

            {!!imgUrl && (
                <div className='flex flex-col gap-4'>
                    <p>
                        <b>URL:</b> {imgUrl}
                    </p>

                    {/* eslint-disable-next-line */}
                    <img className='rounded-lg' src={imgUrl} />
                </div>
            )}

            <input onChange={handleChange} ref={fileInputRef} className="hidden" type="file" name="file" accept="image/*" disabled={isUploading || disabled} />
        </div>
    );
}