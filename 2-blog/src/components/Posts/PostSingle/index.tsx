import { Container } from "@/components/Container";
import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";

type PostSingleProps = {
    slug: string;
};

export async function PostSingle({ slug }: PostSingleProps) {
    const post = await findPostBySlugCached(slug);

    return (
        <article>
            <Container>
                <header className="group flex flex-col gap-4 mb-4">
                    <Image
                        src={post.coverImageUrl}
                        width={1200}
                        height={720}
                        alt={post.title}
                        className="blok mx-auto rounded-xl"
                    />
                    <PostHeading href={`/post/${post.slug}`} as="h2">
                        {post.title}
                    </PostHeading>

                    <p>
                        {post.author} | <PostDate dateTime={post.createdAt} />
                    </p>
                </header>
                <div className="resume text-xl mb-8 text-slate-500 italic">{post.excerpt}</div>

                <div className="content">{post.content}</div>
            </Container>
        </article>
    );
}
