import { UpdatePasswordForm } from '@/components/Admin/UpdateUserPassword';
import { Container } from '@/components/Container';
import { Loader } from '@/components/Loader';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Trocar senha',
};

export default async function AdminUserPage() {
    return (
        <Suspense fallback={<Loader />}>
            <Container>
                <UpdatePasswordForm />
            </Container>
        </Suspense>
    );
}