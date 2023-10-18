import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from './../components/layouts/DarkLayout'

export default function About() {
  return (
    <>
      <h1> About Page </h1>

      <h1 className={'title'}>
        Ir al <Link href="/">Home</Link>
      </h1>

      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/about.tsx</code>
        </p>
      </div>
    </>
  )
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}
