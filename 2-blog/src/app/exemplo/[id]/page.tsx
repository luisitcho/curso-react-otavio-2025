
import { revalidateExampleAction } from '@/actions/revalidadte-example';
import { formatHour, formatHourCached } from '@/utils/format-datetime';

//export const dynamic = 'force-static';
//export const revalidate = 10;

export default async function ExemploPage(params: { params: Promise<{ id: string }> }) {
    const hour = await formatHourCached();
    const { id } = await params.params;

    return (
        <main className="min-h-150 text-4xl font-bold">
            <div className="container">

                <div>
                    Hora: {hour} (ID: {id})</div>

                <form action={revalidateExampleAction} className='py-16'>
                    <input type="hidden" name='path' defaultValue={`/exemplo/${id}`} />

                    <button type="submit" className='bg-gray-500 text-sm text-white p-1 rounded hover:bg-blue-400 transition cursor-pointer'>Revalidate</button>
                </form>

            </div>
        </main>
    );
}
