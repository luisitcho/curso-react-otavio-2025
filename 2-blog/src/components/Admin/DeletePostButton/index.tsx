'use client';

import { deletePostAction } from "@/actions/post/delete-post-action";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";

type DeletePostButtonProps = {
    post: {
        id: string;
        title: string;
    }
}

export function DeletePostButton({ post }: DeletePostButtonProps) {
    const [isPending, startTransition] = useTransition();

    function handleClick() {
        if (!confirm(`Tem certeza que deseja excluir o post "${post.title}"?`)) {
            return;
        }
        
        startTransition(async () => {
            const result = await deletePostAction(post.id);
            alert(`O result é: ${result}`);
        });
    }

    return (
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
            onClick={handleClick}
            disabled={isPending}
        >
            <Trash2Icon size={20} />
        </button>
    )
}