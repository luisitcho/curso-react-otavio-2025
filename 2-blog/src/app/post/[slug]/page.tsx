import { Container } from "@/components/Container";
import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";

type PostSlugPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({
    params,
}: PostSlugPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await findPostBySlugCached(slug);

    return {
        title: post.title,
        description: post.excerpt,
    };
}

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
