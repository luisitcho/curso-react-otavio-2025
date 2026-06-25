import * as sanitizeStrMod from '@/utils/sanetize-str';
import { makeValidatedTodo } from './make-validated-todo';
import { describe, expect, test, vi } from 'vitest';

describe('makeValidatedTodo (unit)', () => {
    test('should call sanitizeStr with the correct value', () => {
        // Arrange
        const description = 'abcd';
        const sanitizeStrSpy = vi
            .spyOn(sanitizeStrMod, 'sanitizeStr')
            .mockReturnValue(description);

        // Act
        makeValidatedTodo(description);

        // Assert
        expect(sanitizeStrSpy).toHaveBeenCalledExactlyOnceWith(description);
        expect(sanitizeStrSpy).toHaveBeenCalledTimes(1);
        expect(sanitizeStrSpy).toHaveBeenCalledWith(description);
    });

    // test('should call validateTodoDescription with the return value of sanitizeStr', () => {});

    // test('should call makeNewTodo if validatedDescription returned success', () => {});

    // test('should return validatedDescription.error if validation failed', () => {});
});