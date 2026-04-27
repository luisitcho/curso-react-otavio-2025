import { MenuAdmin } from "@/components/Admin/MenuAdmin";
import { requireLoginSessionOrRedirect } from '@/lib/login/manage-login';

export default async function AdminPostLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    await requireLoginSessionOrRedirect();

    return (
        <>
            <MenuAdmin />
            {children}
        </>
    );
}
