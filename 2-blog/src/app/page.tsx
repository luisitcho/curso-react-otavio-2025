import { Container } from "@/Components/Container";
import { Loader } from "@/Components/Loader";
import { PostsList } from "@/Components/PostsLists/inedx";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
    return (
        <>
            <section>
                <Container>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16 group">
                        <Link
                            href="#"
                            className="w-full h-full overflow-hidden rounded-xl"
                        >
                            <Image
                                src="/images/bryen_0.png"
                                width={1200}
                                height={720}
                                alt="Titulo do post"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
                                priority
                            />
                        </Link>
                        <div className="flex flex-col gap-2 xl:justify-center">
                            <time
                                dateTime="2025-07-26"
                                className="text-slate-400 text-sm/tight"
                            >
                                26/07/2025 10:00
                            </time>

                            <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
                                <Link href="#">Lorem ipsum dolor sit amet consectetur</Link>
                            </h1>

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
