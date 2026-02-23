"use server";

import { asyncDelay } from "@/utils/async-delay";
import { logColor } from "@/utils/log-color";

export async function deletePostAction(id: string) {
    await asyncDelay(1000); // Simula um atraso de 1 segundo
    logColor(`Deletando post com ID: ${id}`);

    return id;
}
