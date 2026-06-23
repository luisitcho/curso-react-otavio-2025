import { describe, expect, test } from "vitest";
import { makeNewTodo } from "./make-new-todo";

describe("makeNewTodo (unit)", () => {
    test("should return a new valid todo", () => {
        // AAA -> Arrange, Act, Assert
        // Arrange -> Criar as coisas que eu preciso
        const expectedTodo = {
            id: expect.any(String),
            description: "any_description",
            createdAt: expect.any(String),
        };

        // Act
        const newTodo = makeNewTodo("any_description");

        // Assert
        // toBe ===
        // toEqual toStrictEqual
        // Checando apenas a description
        expect(newTodo.description).toBe(expectedTodo.description);

        // Checando o objeto inteiro
        expect(newTodo).toStrictEqual(expectedTodo);
    });
});