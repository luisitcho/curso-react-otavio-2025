import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";

type PostSummaryProps = {
    title: string;
    excerpt: string;
    postHeading: "h1" | "h2" | "h3";
    postLink: string;
    createdAt: string;
};

export function PostSummary({
    title,
    excerpt,
    postHeading,
    postLink,
    createdAt,
}: PostSummaryProps) {
    return (
        <div className="flex flex-col gap-2 xl:justify-center">
            <PostDate dateTime={createdAt} />

            <PostHeading href={postLink} as={postHeading}>
                {title}
            </PostHeading>

            <p>{excerpt}</p>
        </div>
    );
}
