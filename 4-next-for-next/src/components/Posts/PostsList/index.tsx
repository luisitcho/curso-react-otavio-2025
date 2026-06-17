import { ErrorMessage } from "@/components/ErrorMessage";
import { PostImage } from "../PostImage";
import { PostSummary } from "../PostSummary";
import { Container } from "@/components/Container";
import { findAllPublicPostsCached } from "@/lib/post/queries/public";

export async function PostsList() {
    const posts = await findAllPublicPostsCached();

    if (posts.length <= 1) return;


    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {posts.slice(1).map((post) => {
                    return (
                        <div
                            key={post.id}
                            className="flex flex-col gap-4 group"
                        >
                            <PostImage
                                linkProps={{ href: `/post/${post.slug}` }}
                                imageProps={{
                                    src: post.coverImageUrl,
                                    width: 1200,
                                    height: 720,
                                    alt: post.title,
                                }}
                            />
                            <PostSummary
                                title={post.title}
                                excerpt={post.excerpt}
                                createdAt={post.createdAt}
                                postLink={`/post/${post.slug}`}
                                postHeading="h3"
                            ></PostSummary>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}
