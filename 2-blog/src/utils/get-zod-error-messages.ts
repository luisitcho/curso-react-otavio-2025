import { ZodError } from 'zod';

export function getZodErrorMessages<T>(error: ZodError<T>): string[] {
    return Object.values(error)
        .map(field => {
            if (Array.isArray(field)) return field;
            return field?._errors || [];
        })
        .flat()
        .filter(Boolean);
}