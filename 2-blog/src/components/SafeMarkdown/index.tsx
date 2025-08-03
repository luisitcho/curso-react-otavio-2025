import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
type SafeMarkdownProps = {
    markdown: string;
    className?: string;
};

export function SafeMarkdown({ markdown, className }: SafeMarkdownProps) {
    return (
        <div className={className}>
            <ReactMarkdown
                rehypePlugins={[rehypeSanitize]}
                remarkPlugins={[remarkGfm]}
            >
                {markdown}
            </ReactMarkdown>
        </div>
    );
}
