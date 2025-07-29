import { Container } from "@/components/Container";
import { PostImage } from "../PostImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";

export async function PostFeatured() {
    const posts = await findAllPublicPosts();
    const post = posts[0];

    const post_slug = post.slug;
    const post_link = `/post/${post_slug}`;

    return (
        <Container>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 group">
                <PostImage
                    linkProps={{ href: post_link }}
                    imageProps={{
                        src: post.coverImageUrl,
                        width: 1200,
                        height: 720,
                        alt: post.title,
                        priority: true,
                    }}
                />
                <PostSummary
                    title={post.title}
                    excerpt={post.excerpt}
                    createdAt={post.createdAt}
                    postLink={post_link}
                    postHeading="h2"
                ></PostSummary>
            </div>
        </Container>
    );
}
