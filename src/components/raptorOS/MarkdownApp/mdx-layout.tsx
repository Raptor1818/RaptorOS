import css from '@/styles/MarkdownApp/MarkdownApp.module.css'

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function MdxLayout(props: Props) {
  return <div className={`${css.markdownAppWrapper} ${props.className} revert-tailwind`} >
    {props.children}
  </div>
}