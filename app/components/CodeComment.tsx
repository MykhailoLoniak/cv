interface CodeCommentProps {
  children: string;
}

export const CodeComment = ({ children }: CodeCommentProps) => (
  <h2 className="font-mono text-sm text-neutral-500">
    <span aria-hidden="true">{"// "}</span>
    {children}
  </h2>
);
