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
                                className="group-hover:scale-105 transition duration-700"
                            />
                        </Link>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque, nobis. Ad, dignissimos nihil aliquid
                            dolorum voluptas tenetur. Cumque veritatis libero
                            ullam repudiandae id aperiam necessitatibus minima
                            accusamus facere, tempora corporis nihil suscipit
                            vitae. Voluptatibus, obcaecati molestias libero,
                            similique quaerat minima neque enim deleniti beatae
                            culpa distinctio vel repellat vitae qui. Nobis
                            veritatis qui atque praesentium quam officia
                            doloribus eius, dicta odio fugit autem ab recusandae
                            tempore earum a. Quam illo molestias tempore et aut
                            tenetur perspiciatis dolorem ipsam perferendis
                            praesentium modi ullam doloremque magni sed suscipit
                            dolorum eius totam a, cupiditate vitae nostrum
                            asperiores provident? Cumque illum autem minima!
                            Deleniti!
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
