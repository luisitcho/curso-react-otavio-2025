"use server";

import { postRepository } from '@/repositories/post';
import { revalidateTag } from 'next/cache';

export async function deletePostAction(id: string) {

    if (!id || typeof id !== 'string') {
        return {
            error: 'Dados inválidos',
        };
    }

    let post;
    try {
        post = await postRepository.delete(id);
    } catch (e: unknown) {
        if (e instanceof Error) {
            return {
                error: e.message,
            };
        }

        return {
            error: 'Erro desconhecido',
        };
    }

    revalidateTag('posts', 'max');
    revalidateTag(`post-${post.slug}`, 'max');

    return {
        error: "",
    };
}
