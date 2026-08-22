interface CodeCommentProps {
  children: string;
}

export const CodeComment = ({ children }: CodeCommentProps) => (
  <p className="font-mono text-sm text-neutral-500">{children}</p>
);
