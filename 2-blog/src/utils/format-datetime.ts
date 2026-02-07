import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

//import { unstable_cacheLife as cacheLife } from "next/cache";
//import { unstable_cacheTag as cacheTag } from "next/cache";

import { unstable_cacheLife } from "next/cache";
import { unstable_cacheTag } from "next/cache";

export function formatDateTime(rawDate: string): string {
    const date = new Date(rawDate);

    return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
        locale: ptBR,
    });
}

export function formatRelativeDateTime(rawDate: string): string {
    const date = new Date(rawDate);

    return formatDistanceToNow(date, {
        locale: ptBR,
        addSuffix: true,
    });
}

export function formatHour(rawDate: number) {
    const date = new Date(rawDate);

    return format(date, "HH:mm:ss", {
        locale: ptBR,
    });
}

export async function formatHourCached() {
    "use cache";
    unstable_cacheLife("seconds");
    unstable_cacheTag("formatHourCached");

    return formatHour(Date.now());
}
