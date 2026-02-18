import { findAllPostAdmin } from "@/lib/post/queries/admin";

export default async function PostsListAdmin() {
    const posts = await findAllPostAdmin();
    
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="container">
                <h1 className="text-2xl font-bold">Admin Post Page</h1>

                {posts.map((post) => {
                    return <div key={post.id}>{post.title}</div>
                })}
            </div>
        </div>
    );
}