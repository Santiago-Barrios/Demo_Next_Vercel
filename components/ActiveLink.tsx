import Link from 'next/link'
import { useRouter } from 'next/router'

import { FC, CSSProperties } from 'react'

interface Props {
  text: string
  href: string
}

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

export const ActiveLink: FC<Props> = ({ href, text }) => {
  const router = useRouter()

  return (
    <Link legacyBehavior href={href}>
      <a style={router.pathname === href ? style : {}}>{text}</a>
    </Link>
  )
}
