import { Container } from "@/components/Container";
import { findPostBySlugCached } from "@/lib/post/queries";

type PostSingleProps = {
    slug: string;
};

export async function PostSingle({ slug }: PostSingleProps) {
    const post = await findPostBySlugCached(slug);

    return (
        <Container>
            <h2 className="text-7xl font-extrabold py-16">
                Rota: {post.title}
            </h2>

            <p>{post.content}</p>
        </Container>
    );
}
