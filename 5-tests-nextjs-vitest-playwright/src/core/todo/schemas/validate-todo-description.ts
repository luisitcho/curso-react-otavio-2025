type ValidateTodoDescription = {
    success: boolean;
    errors: string[];
}

export function validateTodoDescription(description: string): ValidateTodoDescription {
    const errors = [];

if (description.length <= 3) {
        errors.push('Description must be at least 3 characters long.');
    }

    if (description.length >= 100) {
        errors.push('Description must not exceed 100 characters.');
    }

    return {
        success: errors.length === 0,
        errors,
    };
}