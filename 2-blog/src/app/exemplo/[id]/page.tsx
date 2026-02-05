import { revalidateExampleAction } from '@/actions/revalidadte-example';
import { formatHour } from '@/utils/format-datetime';

//export const dynamic = 'force-static';
//export const revalidate = 10;

export default async function ExemploPage(params: { params: Promise<{ id: string }> }) {
    const hour = formatHour(Date.now());
    const { id } = await params.params;

    const response = await fetch('https://randomuser.me/api/?results=1', {
        next: { tags: ['random-user'], revalidate: 10 }
    });
    const data = await response.json();
    const name = data.results[0].name.first;

    return (
        <main className="min-h-[600px] text-4xl font-bold">
            <div>
                Hora: {hour} (ID: {id}) - Nome: {name}</div>

            <form action={revalidateExampleAction} className='py-16'>
                <input type="hidden" name='path' defaultValue={`/exemplo/${id}`} />

                <button type="submit" className='bg-gray-500 text-sm text-white p-1 rounded hover:bg-blue-400 transition cursor-pointer'>Revalidate</button>
            </form>
        </main>
    );
}
