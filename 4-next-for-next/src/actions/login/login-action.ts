'use server';

import { LoginSchema } from '@/lib/login/schemas';
import { apiRequest } from '@/utils/api-request';
import { asyncDelay } from '@/utils/async-delay';
import { getZodErrorMessages } from '@/utils/get-zod-error-messages';

type LoginActionState = {
    email: string;
    errors: string[];
};

export async function loginAction(state: LoginActionState, formData: FormData) {
    const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN));

    if (!allowLogin) {
        return {
            email: '',
            errors: ['Login not allowed'],
        };
    }

    await asyncDelay(5000); // Vou manter

    if (!(formData instanceof FormData)) {
        return {
            email: '',
            errors: ['Dados inválidos'],
        };
    }

    // Validar
    const formObj = Object.fromEntries(formData.entries());
    const formEmail = formObj?.email?.toString() || '';
    const parsedFormData = LoginSchema.safeParse(formObj);

    if (!parsedFormData.success) {
        return {
            email: formEmail,
            errors: getZodErrorMessages(parsedFormData.error.format()),
        };
    }

    // Fetch
    const loginResponse = await apiRequest<{ accessToken: string }>(
        '/auth/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(parsedFormData.data),
        },
    );

    if (!loginResponse.success) {
        return {
            email: formEmail,
            errors: loginResponse.errors,
        };
    }

    console.log(loginResponse.data);

    // await createLoginSession(email);
    // redirect('/admin/post');

    return {
        email: formEmail,
        errors: ['Success'],
    };
}