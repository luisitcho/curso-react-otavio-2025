import { Container } from "@/Components/Container";
import { Loader } from "@/Components/Loader";
import { Heading } from "@/Components/Posts/Heading";
import { PostImage } from "@/Components/Posts/PostImage";
import { PostsList } from "@/Components/Posts/PostsList/inedx";
import { Suspense } from "react";

export default function Home() {
    return (
        <>
            <section>
                <Container>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 group">
                        <PostImage
                            linkProps={{ href: "#" }}
                            imageProps={{
                                src: "/images/bryen_9.png",
                                width: 1200,
                                height: 720,
                                alt: "Titulo do post",
                                priority: true
                            }}
                        />
                        <div className="flex flex-col gap-2 xl:justify-center">
                            <time
                                dateTime="2025-07-26"
                                className="text-slate-400 text-sm/tight"
                            >
                                26/07/2025 10:00
                            </time>

                            <Heading href="#" as="h2">
                                Lorem ipsum dolor sit amet consectetur
                            </Heading>

                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. In velit dolorem est dolor
                                porro, doloribus neque, quidem mollitia
                                doloremque, ad perspiciatis fugiat. Rerum, vel
                                ex? Impedit ullam harum blanditiis mollitia?
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
            <Container>
                <Suspense fallback={<Loader />}>
                    <PostsList></PostsList>
                </Suspense>
            </Container>
        </>
    );
}
