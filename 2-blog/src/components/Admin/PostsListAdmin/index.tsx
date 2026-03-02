import { DeletePostButton } from "@/components/Admin/DeletePostButton";
import { ErrorMessage } from "@/components/ErrorMessage";
import { findAllPostAdmin } from "@/lib/post/queries/admin";
import Link from "next/link";

export default async function PostsListAdmin() {
    const posts = await findAllPostAdmin();

    if (posts.length <= 1) return <ErrorMessage contentTitle="Ops!" content={<p>Nenhum post foi encontrado.</p>} />;


    return (
        <div className="flex h-min-screen items-center justify-center">
            <div className="container flex flex-col gap-4">

                {posts.length > 0 && (
                    <h5 className="mb-4 text-sm font-medium text-white-500">
                        Total de {posts.length} {posts.length === 1 ? "post" : "posts"}
                    </h5>
                )}

                {posts.map((post) => {
                    const isDraft = !post.published;
                    return (
                        <div
                            key={post.id}
                            className={`p-4 border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:bg-slate-50 ${isDraft
                                ? "bg-amber-50 border-amber-200 border-dashed shadow-sm"
                                : "bg-white/80 border-slate-200"
                                }`}
                        >
                            <div className="flex flex-col gap-1 flex-1 min-w-0">
                                <Link
                                    href={`/admin/post/${post.id}`}
                                    className="font-semibold text-slate-800 hover:text-blue-600 transition-colors wrap-break-word block text-lg sm:text-base"
                                >
                                    {post.title}
                                </Link>
                                <span className="text-xs text-slate-500 font-mono">ID: {post.id}</span>
                            </div>

                            <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0">
                                {isDraft && (
                                    <span className="text-[10px] sm:text-xs font-bold text-amber-700 bg-amber-100 px-2 py-1 rounded-full uppercase tracking-tight">
                                        Rascunho
                                    </span>
                                )}

                                <DeletePostButton post={post} />

                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}