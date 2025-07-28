import { Container } from "@/components/Container";
import { Heading } from "../Heading";
import { PostImage } from "../PostImage";

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
                <div className="flex flex-col gap-2 xl:justify-center">
                    <time
                        dateTime="2025-07-26"
                        className="text-slate-400 text-sm/tight"
                    >
                        26/07/2025 10:00
                    </time>

                    <Heading href={post_link} as="h2">
                        Lorem ipsum dolor sit amet consectetur
                    </Heading>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        In velit dolorem est dolor porro, doloribus neque,
                        quidem mollitia doloremque, ad perspiciatis fugiat.
                        Rerum, vel ex? Impedit ullam harum blanditiis mollitia?
                    </p>
                </div>
            </div>
        </Container>
    );
}
