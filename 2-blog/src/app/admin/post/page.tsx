import { findAllPostAdmin } from "@/lib/post/queries/admin";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Admin Post Page",
    description: "Admin Post Page",
};

export default async function AdminPostPage() {
    const posts = await findAllPostAdmin();
    return (
        <div className="flex h-screen items-center justify-center">
            <h1 className="text-2xl font-bold">Admin Post Page</h1>

            {posts.map((post) => {
                return <div key={post.id}>{post.title}</div>
            })}
        </div>
    );
}