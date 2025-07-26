import { Container } from "@/Components/Container";
import { Loader } from "@/Components/Loader";
import { PostsList } from "@/Components/PostsLists/inedx";
import { Suspense } from "react";

export default function Home() {
    return (
        <>
            <Container>
                <Suspense fallback={<Loader />}>
                    <PostsList></PostsList>
                </Suspense>
            </Container>
        </>
    );
}
