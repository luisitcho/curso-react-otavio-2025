import { findAllPostAdmin } from "@/lib/post/queries/admin";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";

export default async function PostsListAdmin() {
    const posts = await findAllPostAdmin();

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="container flex flex-col gap-4">

                {posts.map((post) => {
                    const isDraft = !post.published;
                    return (
                        <div
                            key={post.id}
                            className={`p-4 border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:bg-slate-50 ${isDraft
                                ? "bg-amber-50 border-amber-200 border-dashed shadow-sm"
                                : "bg-white border-slate-200"
                                }`}
                        >
                            <div className="flex flex-col gap-1 flex-1 min-w-0">
                                <Link
                                    href={`/admin/post/${post.id}`}
                                    className="font-semibold text-slate-800 hover:text-blue-600 transition-colors break-words block text-lg sm:text-base"
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

                                <button
                                    className="text-slate-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full"
                                    title={`Excluir post "${post.title}"`}
                                    aria-label={`Excluir post "${post.title}"`}
                                >
                                    <Trash2Icon size={20} />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}