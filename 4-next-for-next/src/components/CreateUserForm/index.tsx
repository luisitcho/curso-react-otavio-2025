'use client';

import { InputText } from '@/components/InputText';
import clsx from 'clsx';
import { UserRoundIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../Button';

export function CreateUserForm() {
    return (
        <div
            className={clsx(
                'flex items-center justify-center',
                'text-center max-w-xl w-full mt-16 mb-32 mx-auto',
            )}
        >
            <form action={''} className='flex-1 flex flex-col gap-6'>
                <InputText
                    type='text'
                    name='name'
                    labelText='Nome'
                    placeholder='Seu nome'
                    disabled={false}
                    defaultValue={''}
                    required
                />
                <InputText
                    type='email'
                    name='email'
                    labelText='E-mail'
                    placeholder='Sua e-mail'
                    disabled={false}
                    defaultValue={''}
                    required
                />
                <InputText
                    type='password'
                    name='password'
                    labelText='Senha'
                    placeholder='Sua senha'
                    disabled={false}
                    required
                />
                <InputText
                    type='password'
                    name='password2'
                    labelText='Repetir senha'
                    placeholder='Sua senha novamente'
                    disabled={false}
                    required
                />

                <Button disabled={false} type='submit' className='mt-4'>
                    <UserRoundIcon />
                    Criar conta
                </Button>

                <p className='text-sm/tight'>
                    <Link href='/login'>Já tem conta? Entrar</Link>
                </p>
            </form>
        </div>
    );
}