import {
    formatDateTime,
    formatRelativeDateTime,
} from "@/utils/format-datetime";
import { Heading } from "../Heading";

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
            <time
                dateTime={createdAt}
                className="text-slate-400 text-sm/tight"
                title={formatRelativeDateTime(createdAt)}
            >
                {formatDateTime(createdAt)}
            </time>

            <Heading href={postLink} as={postHeading}>
                {title}
            </Heading>

            <p>{excerpt}</p>
        </div>
    );
}
