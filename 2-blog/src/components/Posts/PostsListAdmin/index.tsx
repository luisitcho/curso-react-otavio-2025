import { DeletePostButton } from "@/components/Admin/DeletePostButton";
import { findAllPostAdmin } from "@/lib/post/queries/admin";
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

                                <DeletePostButton post={post} />

                            </div>
                        </div>
                    );
                })}

                <div
                    className='fixed z-50 inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center'

                >
                    <div
                        className='bg-slate-100 p-6 rounded-lg max-w-2xl mx-6 flex flex-col gap-6 shadow-lg shadow-black/30 text-center'
                    >
                        <h3 className='text-xl text-slate-700 font-extrabold'>Título do diálogo</h3>
                        <p className="text-slate-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
                            ipsam quae laborum adipisci reprehenderit veniam delectus quos quas.
                            Voluptates fuga, quisquam accusamus asperiores quam quo labore
                            laborum modi similique quod?
                        </p>
                        <div className='flex items-center justify-around'>
                            <button
                                className='bg-slate-200 hover:bg-slate-300 transition text-slate-950 flex items-center justify-center py-2 px-4 rounded-lg cursor-pointer'
                                autoFocus
                            >
                                Cancelar
                            </button>

                            <button
                                className='bg-blue-500 hover:bg-blue-600 transition text-blue-50 flex items-center justify-center py-2 px-4 rounded-lg cursor-pointer'
                            >
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}