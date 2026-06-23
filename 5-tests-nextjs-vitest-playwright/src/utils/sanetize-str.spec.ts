import { describe, expect, test } from "vitest";
import { sanitizeStr } from "./sanetize-str";

describe("sanitizeStr (unit)", () => {
    test('returns an empty string when it receives a falsy value', () => {
        // @ts-expect-error testando a função sem parâmetros
        expect(sanitizeStr()).toBe('');
    });

    test('returns an empty string when it receives a value that is NOT a string', () => {
        // @ts-expect-error testando a função com tipagem incorreta
        expect(sanitizeStr(123)).toBe('');
    });

    test('ensures the provided string is trimmed', () => {
        expect(sanitizeStr('   a   ')).toBe('a');
    });

    test('ensures the string is normalized using NFC', () => {
        const original = 'e\u0301';
        const expected = 'é';
        expect(expected).toBe(sanitizeStr(original));
    });
});