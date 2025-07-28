import { Loader } from "@/components/Loader";
import { PostFeatured } from "@/components/Posts/PostFeatured";
import { PostsList } from "@/components/Posts/PostsList";
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
