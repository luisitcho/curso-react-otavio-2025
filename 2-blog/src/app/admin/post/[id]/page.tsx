export const dynamic = "force-dynamic";

type AdminPostIdPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function AdminPostIdPage({ params }: AdminPostIdPageProps) {
    const { id } = await params;
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="container">
                <h1 className="text-2xl font-bold">Admin Post Page - ID: {id}</h1>
            </div>
        </div>
    );
}