import { MenuAdmin } from "@/components/Admin/MenuAdmin";
import { requireLoginSessionForApiOrRedirect } from '@/lib/login/manage-login';

export default async function AdminPostLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    await requireLoginSessionForApiOrRedirect();

    return (
        <>
            <MenuAdmin />
            {children}
        </>
    );
}
