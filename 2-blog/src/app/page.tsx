import { Loader } from "@/Components/Loader";
import { PostsList } from "@/Components/PostsLists/inedx";
import { Suspense } from "react";

export default function Home() {
    return (
        <>
            <div className="container">
                <Suspense fallback={<Loader />}>
                    <PostsList></PostsList>
                </Suspense>
            </div>
        </>
    );
}
