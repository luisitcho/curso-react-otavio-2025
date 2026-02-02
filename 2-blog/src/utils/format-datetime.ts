import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

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
