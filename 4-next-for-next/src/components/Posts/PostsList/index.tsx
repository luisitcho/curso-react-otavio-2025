import { ErrorMessage } from "@/components/ErrorMessage";
import { PostImage } from "../PostImage";
import { PostSummary } from "../PostSummary";
import { Container } from "@/components/Container";
import { findAllPublicPostsFromApiCached } from "@/lib/post/queries/public";

export async function PostsList() {
    const postsRes = await findAllPublicPostsFromApiCached();

    if (!postsRes.success) {
        return null;
    }

    const posts = postsRes.data;

    if (posts.length <= 1) {
        return null;
    }


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
