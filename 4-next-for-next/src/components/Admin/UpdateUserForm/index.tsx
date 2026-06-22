'use client';

import { Button } from '@/components/Button';
import { Dialog } from '@/components/Dialog';
import { InputText } from '@/components/InputText';
import { asyncDelay } from '@/utils/async-delay';
import clsx from 'clsx';
import { LockKeyholeIcon, OctagonXIcon, UserPenIcon } from 'lucide-react';
import Link from 'next/link';
import { useState, useTransition } from 'react';

export function UpdateUserForm() {
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [isTransitioning, startTransition] = useTransition();
    const safetyDelay = 10000;
    const isElementsDisabled = isTransitioning;

    function showDeleteAccountDialog(
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        e.preventDefault();
        setIsDialogVisible(true);

        startTransition(async () => {
            await asyncDelay(safetyDelay);
        });
    }

    function handleDeleteUserAccount() {
        //
    }

    return (
        <div
            className={clsx(
                'flex items-center justify-center',
                'text-center max-w-sm mt-16 mb-32 mx-auto',
            )}
        >
            <form action={''} className='flex-1 flex flex-col gap-6'>
                <InputText
                    type='text'
                    name='name'
                    labelText='Nome'
                    placeholder='Seu nome'
                    disabled={isElementsDisabled}
                    defaultValue={''}
                />

                <InputText
                    type='text'
                    name='email'
                    labelText='E-mail'
                    placeholder='Seu e-mail'
                    disabled={isElementsDisabled}
                    defaultValue={''}
                />

                <div className='flex items-center justify-center mt-4'>
                    <Button size='md' disabled={isElementsDisabled} type='submit'>
                        <UserPenIcon />
                        Atualizar
                    </Button>
                </div>

                <div className='flex gap-4 items-center justify-between mt-8'>
                    <Link
                        className={clsx(
                            'flex gap-2 items-center justify-center transition',
                            'hover:text-blue-600',
                        )}
                        href='/admin/user/password'
                    >
                        <LockKeyholeIcon />
                        Trocar senha
                    </Link>

                    <Link
                        className={clsx(
                            'flex gap-2 items-center justify-center transition',
                            'text-red-600 hover:text-red-700',
                        )}
                        href='#'
                        onClick={showDeleteAccountDialog}
                    >
                        <OctagonXIcon />
                        Apagar conta
                    </Link>
                </div>
            </form>

            <Dialog
                content="Ao apagar meu usuário, meus dados e todos os meus posts também serão excluídos. Essa ação é IRREVERSÍVEL. Em alguns segundos os botões serão liberados. Clique em OK para confirmar ou Cancelar para fechar essa janela."
                disabled={isElementsDisabled}
                onCancel={() => setIsDialogVisible(false)}
                onConfirm={handleDeleteUserAccount}
                isVisible={isDialogVisible}
                title='Apagar meu usuário'
            />
        </div>
    );
}