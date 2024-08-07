import Link from 'next/link'
import css from '@/styles/NotFoundPage.module.css'

function NotFoundPage() {
	return <div className={css.notFoundContainer}>
    <div className={css.textContainer}>
      <h1 className={css.frownHeader}>{":("}</h1>
      <p className={css.pSize404}>RaptorOS ran into a problem and needs to restart. We are not collecting any error info.</p>
      <Link href="/" className={css.homeLink}>
        Reboot and go to desktop
      </Link>
      <p className={css.stopError}>Stop error: 0x404</p>
    </div>
  </div>
}

export default NotFoundPage