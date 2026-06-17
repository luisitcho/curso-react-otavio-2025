import {
    formatDateTime,
    formatRelativeDateTime,
} from "@/utils/format-datetime";

type PostDateProps = {
    dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
    return (
        <time
            dateTime={dateTime}
            className="text-slate-400 text-sm/tight"
            title={formatRelativeDateTime(dateTime)}
        >
            {formatDateTime(dateTime)}
        </time>
    );
}
