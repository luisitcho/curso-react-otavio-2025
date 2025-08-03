import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
type SafeMarkdownProps = {
    markdown: string;
    className?: string;
};

export function SafeMarkdown({ markdown, className }: SafeMarkdownProps) {
    return (
        <div
            className={`
                prose prose-slate 
                dark:prose-invert w-full max-w-none overflow-hidden
                prose-a:transition 
                prose-a:font-semibold 
                prose-a:no-underline prose-a:hover:underline 
                prose-img:mx-auto
                lg:prose-lg
                ${className ?? ""}`}
        >
            <ReactMarkdown
                rehypePlugins={[rehypeSanitize]}
                remarkPlugins={[remarkGfm]}
            >
                {markdown}
            </ReactMarkdown>
        </div>
    );
}
