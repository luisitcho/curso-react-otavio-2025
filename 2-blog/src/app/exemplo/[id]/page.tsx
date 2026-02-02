import { formatHour } from '@/utils/format-datetime';
import { revalidatePath, revalidateTag } from 'next/cache';

export const dynamic = 'force-static';
export const revalidate = 10;

//export const dynamicParams = true;

//export async function generateStaticParams() {
//    return [{ id: "123" }, { id: "456" }, { id: "789" }];
//}

export default async function ExemploPage(params: { params: Promise<{ id: string }> }) {
    const hour = formatHour(Date.now());

    const { id } = await params.params;

    return (
        <main className="min-h-[600px] text-4xl font-bold">
            <div>Hora: {hour}  (ID: {id})</div>
        </main>
    );
}
