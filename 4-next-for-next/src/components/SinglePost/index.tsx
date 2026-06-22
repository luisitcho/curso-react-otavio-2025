import { findPublicPostBySlugFromApiCached } from '@/lib/post/queries/public';
import Image from 'next/image';
import { SafeMarkdown } from '../SafeMarkdown';
import { notFound } from 'next/navigation';
import { PostHeading } from '../Posts/PostHeading';
import { PostDate } from '../Posts/PostDate';

type SinglePostProps = {
    slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
    const postRes = await findPublicPostBySlugFromApiCached(slug);

    if (!postRes.success) {
        notFound();
    }

    const post = postRes.data;
    return (
        <article className='mb-16'>
            <header className='group flex flex-col gap-4 mb-4'>
                <Image
                    className='rounded-xl'
                    src={post.coverImageUrl}
                    width={1200}
                    height={720}
                    alt={post.title}
                />

                <PostHeading href={`/posts/${post.slug}`}>{post.title}</PostHeading>

                <p>
                    {post.author.name} | <PostDate dateTime={post.createdAt} />
                </p>
            </header>

            <p className='text-xl mb-4 text-slate-600'>{post.excerpt}</p>

            <SafeMarkdown markdown={post.content} />
        </article>
    );
}