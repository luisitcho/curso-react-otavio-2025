'use server';

import {
    CreateUserSchema,
    PublicUserDto,
    PublicUserSchema,
} from '@/lib/user/schemas';
import { asyncDelay } from '@/utils/async-delay';
import { getZodErrorMessages } from '@/utils/get-zod-error-messages';

type CreateUserActionState = {
    user: PublicUserDto;
    errors: string[];
    success: boolean;
};

export async function createUserAction(
    state: CreateUserActionState,
    formData: FormData,
): Promise<CreateUserActionState> {
    await asyncDelay(3000);

    if (!(formData instanceof FormData)) {
        return {
            user: state.user,
            errors: ['Dados inválidos'],
            success: false,
        };
    }

    const formObj = Object.fromEntries(formData.entries());
    const parsedFormData = CreateUserSchema.safeParse(formObj);

    if (!parsedFormData.success) {
        return {
            user: PublicUserSchema.parse(formObj),
            errors: getZodErrorMessages(parsedFormData.error.format()),
            success: false,
        };
    }

    // FETCH API
    const apiUrl = process.env.API_URL || 'http://localhost:3001';

    try {
        const response = await fetch(`${apiUrl}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(parsedFormData.data),
        });
        const json = await response.json();

        if (!response.ok) {
            console.log(json);

            return {
                user: PublicUserSchema.parse(formObj),
                errors: json.message,
                success: false,
            };
        }

        console.log(json);
        return {
            user: PublicUserSchema.parse(formObj),
            errors: ['Success'],
            success: true,
        };
    } catch (e) {
        console.log(e);

        return {
            user: PublicUserSchema.parse(formObj),
            errors: ['Falha ao conectar-se ao servidor'],
            success: false,
        };
    }
}