import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <MainLayout>
      <h1> Home Page </h1>

      <h1 className={'title'}>
        Ir al <Link href="/about">About</Link>
      </h1>

      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/home.tsx</code>
        </p>
      </div>
    </MainLayout>
  )
}
