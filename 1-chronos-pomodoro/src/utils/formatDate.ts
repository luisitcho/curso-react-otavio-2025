import { format } from 'date-fns';

export function formatDate(timestamp: numer) {
    const date = new Date(timestamp);
    return format(date, 'dd/MM/yyyy HH:mm');
}
