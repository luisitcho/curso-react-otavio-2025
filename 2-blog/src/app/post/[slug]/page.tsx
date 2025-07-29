import { Container } from "@/components/Container";
import { findPostBySlugCached } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type PostSlugPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
    const { slug } = await params;
    const post = await findPostBySlugCached(slug);

    return (
        <Container>
            <h2 className="text-7xl font-extrabold py-16">
                Rota: {post.title}
            </h2>
        </Container>
    );
}
