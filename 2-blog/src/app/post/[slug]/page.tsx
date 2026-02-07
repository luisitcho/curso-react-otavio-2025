import { Loader } from "@/components/Loader";
import { PostSingle } from "@/components/Posts/PostSingle";
import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = 'force-static';

type PostSlugPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({
    params,
}: PostSlugPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await findPostBySlugCached(slug);

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
    const { slug } = await params;

    return (
        <Suspense fallback={<Loader />}>
            <PostSingle slug={slug} />
        </Suspense>
    );
}
