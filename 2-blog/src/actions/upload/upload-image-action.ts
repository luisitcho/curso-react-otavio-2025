'use server';

import { logColor } from "@/utils/log-color";

export async function uploadImageAction(formData: FormData) {
    logColor('Uploading image...', 'blue');

    return { success: true, user: 'Senha' };
}