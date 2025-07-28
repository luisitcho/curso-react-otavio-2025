import { postRepository } from "@/repositories/post";
import { PostImage } from "../PostImage";
import { Content } from "../Content";
import { Container } from "@/components/Container";

export async function PostsList() {
    const posts = await postRepository.findAll();

    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {posts.map((post) => {
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
                            <Content
                                title={post.title}
                                excerpt={post.excerpt}
                                date={post.createdAt}
                            ></Content>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}
