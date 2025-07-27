import { Loader } from "@/Components/Loader";
import { PostFeatured } from "@/Components/Posts/PostFeatured";
import { PostsList } from "@/Components/Posts/PostsList";
import { Suspense } from "react";

export default function Home() {
    return (
        <>
            <section className="postFeatured">
                <Suspense fallback={<Loader />}>
                    <PostFeatured />
                </Suspense>
            </section>

            <section className="postList">
                <Suspense fallback={<Loader />}>
                    <PostsList></PostsList>
                </Suspense>
            </section>
        </>
    );
}
