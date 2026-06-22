import { UpdateUserForm } from '@/components/Admin/UpdateUserForm';
import { Container } from '@/components/Container';
import { Loader } from '@/components/Loader';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'User Admin',
};

export default async function AdminUserPage() {
    return (
        <Suspense fallback={<Loader />}>
            <Container>
                <UpdateUserForm />
            </Container>
        </Suspense>
    );
}