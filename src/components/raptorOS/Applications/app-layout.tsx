import css from '@/styles/raptorOS/Applications/AppLayout.module.css'

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function AppLayout(props: Props) {
  return <div className={`${css.AppWrapper} ${props.className}`} >
    {props.children}
  </div>
}