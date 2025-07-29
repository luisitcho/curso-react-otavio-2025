import { Container } from "@/components/Container";

type PostSlugPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
    const { slug } = await params;

    return (
        <Container>
            <h2 className="text-7xl font-extrabold py-16">Rota: {slug}</h2>
        </Container>
    );
}
