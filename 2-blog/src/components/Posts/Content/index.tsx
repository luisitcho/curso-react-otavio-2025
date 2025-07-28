import { formatDateTime, formatRelativeDateTime } from "@/utils/format-datetime";
import { Heading } from "../Heading";

type ContentProps = {
    title: string;
    excerpt: string;
    date: string;
};

export function Content({ title, excerpt, date }: ContentProps) {
    return (
        <div className="flex flex-col gap-2 xl:justify-center">
            <time
                dateTime={date}
                className="text-slate-400 text-sm/tight"
                title={formatRelativeDateTime(date)}
            >
                {formatDateTime(date)}
            </time>

            <Heading href="#" as="h3">
                {title}
            </Heading>

            <p>{excerpt}</p>
        </div>
    );
}
