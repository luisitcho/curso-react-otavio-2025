'use client';

import { deletePostAction } from "@/actions/post/delete-post-action";
import { Dialog } from "@/components/Dialog";
import { Trash2Icon } from "lucide-react";
import { useState, useTransition } from "react";

type DeletePostButtonProps = {
    post: {
        id: string;
        title: string;
    }
}

export function DeletePostButton({ post }: DeletePostButtonProps) {
    const [isPending, startTransition] = useTransition();
    const [showDialog, setShowDialog] = useState(false);

    function handleClick() {
        setShowDialog(true);
    }

    function handleConfirm() {
        startTransition(async () => {
            const result = await deletePostAction(post.id);
            setShowDialog(false);

            if (result.error) {
                alert(`Erro ao excluir post: ${result.error}`);
                return;
            }

        });
    }

    return (
        <>
            <button
                className="
                text-slate-600
                hover:text-red-600
                hover:bg-red-50
                transition-all
                p-2
                rounded-full
                cursor-pointer

                disabled:text-slate-300
                disabled:opacity-60
                disabled:cursor-not-allowed
                disabled:hover:bg-transparent
                disabled:hover:text-slate-300
            "
                title={`Excluir post "${post.title}"`}
                aria-label={`Excluir post "${post.title}"`}
                disabled={isPending}
                onClick={handleClick}
            >
                <Trash2Icon size={20} />
            </button>
            {showDialog && (
                <Dialog
                    isVisible={showDialog}
                    title="Excluir Post"
                    content={`Tem certeza que deseja excluir o post "${post.title}"?`}
                    disabled={isPending}
                    onCancel={() => setShowDialog(false)}
                    onConfirm={() => handleConfirm()}
                />
            )}
        </>

    )
}