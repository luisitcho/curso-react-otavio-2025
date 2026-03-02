import { Loader } from "@/components/Loader";
import PostsListAdmin from "@/components/Admin/PostsListAdmin";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Admin Post Page",
    description: "Admin Post Page",
};

export default async function AdminPostPage() {
    return (
        <Suspense fallback={<Loader />}>
            <PostsListAdmin />
        </Suspense>
    );
}