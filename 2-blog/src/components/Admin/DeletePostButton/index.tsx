'use client';

import { Trash2Icon } from "lucide-react";

type DeletePostButtonProps = {
    post: {
        id: string;
        title: string;
    }
}

export function DeletePostButton({ post }: DeletePostButtonProps) {
    function handleClick() {
        alert(`Clicou para deletar o post com ID: ${post.id}`);
    }

    return (
        <button
            className="text-slate-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full cursor-pointer"
            title={`Excluir post "${post.title}"`}
            aria-label={`Excluir post "${post.title}"`}
            onClick={handleClick}
        >
            <Trash2Icon size={20} />
        </button>
    )
}