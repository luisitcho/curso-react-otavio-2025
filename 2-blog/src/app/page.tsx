import { Loader } from "@/components/Loader";
import { PostFeatured } from "@/components/Posts/PostFeatured";
import { PostsList } from "@/components/Posts/PostsList";
import { Suspense } from "react";

export default function Home() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <PostFeatured />
                <PostsList></PostsList>
            </Suspense>
        </>
    );
}
