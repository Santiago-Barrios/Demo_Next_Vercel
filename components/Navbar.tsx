import styles from './Navbar.module.css'
import { Inter } from 'next/font/google'
import { ActiveLink } from './ActiveLink'

const inter = Inter({ subsets: ['latin'] })

const menuItems = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  },
]

export const Navbar = () => {
  return (
    <nav className={`${styles['menu-container']} ${inter.className}`}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} text={text} href={href} />
      ))}
    </nav>
  )
}
