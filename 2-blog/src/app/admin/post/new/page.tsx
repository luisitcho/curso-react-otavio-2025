import { Button } from "@/components/Button";

export const dynamic = "force-dynamic";

export default async function AdminPostNewPage() {
    return (
        <div className="container flex gap-4 flex-wrap py-16">
            <Button variant='default' size='sm'>
                Confirma
            </Button>
            <Button variant='ghost' size='md'>
                Confirma
            </Button>
            <Button variant='danger' size='lg'>
                Confirma
            </Button>
        </div>
    );
}