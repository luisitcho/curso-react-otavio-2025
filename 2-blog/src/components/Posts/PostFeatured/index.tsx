import { Container } from "@/components/Container";
import { Heading } from "../Heading";
import { PostImage } from "../PostImage";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
    const post_slug = "qualquer";
    const post_link = `/post/${post_slug}`;

    return (
        <Container>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 group">
                <PostImage
                    linkProps={{ href: post_link }}
                    imageProps={{
                        src: "/images/bryen_9.png",
                        width: 1200,
                        height: 720,
                        alt: "Titulo do post",
                        priority: true,
                    }}
                />
                <PostSummary
                    title="Lorem ipsum dolor sit amet consectetur"
                    excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    In velit dolorem est dolor porro, doloribus neque, quidem mollitia doloremque, ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam harum blanditiis mollitia?"
                    createdAt="2025-07-28T02:35:17.297Z"
                    postLink={post_link}
                    postHeading="h2"
                ></PostSummary>
            </div>
        </Container>
    );
}
