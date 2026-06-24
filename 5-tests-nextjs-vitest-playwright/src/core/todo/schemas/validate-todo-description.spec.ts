import { describe, expect, test } from "vitest";
import { validateTodoDescription } from "./validate-todo-description";

describe("validateTodoDescription (unit)", () => {
    test("should return an error when description is less than 3 characters", () => {
        // Arrange
        const description = "abc";

        // Act
        const result = validateTodoDescription(description);

        // Assert
        expect(result.success).toBe(false);
        expect(result.errors).toStrictEqual([
            "Description must be at least 3 characters long.",
        ]);
    });

    test("should return success when description has more than 3 characters", () => {
        // Arrange
        const description = "abcd";

        // Act
        const result = validateTodoDescription(description);

        // Assert
        expect(result.success).toBe(true);
        expect(result.errors).toStrictEqual([]);
    });
});