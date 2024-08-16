import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import css from '@/styles/MarkdownApp/MarkdownApp.module.css'

interface Props {
  source: string;
  className?: string;
}

const MarkdownApp = (props: Props) => {
  return (
    <ReactMarkdown className={`${css.markdownAppWrapper} ${props.className} revert-tailwind`} 
    rehypePlugins={[rehypeRaw, rehypeSanitize]}
    remarkPlugins={[remarkGfm]}>
      {props.source}
    </ReactMarkdown>
  );
}

export default MarkdownApp;
