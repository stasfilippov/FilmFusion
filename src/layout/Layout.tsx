import React, { PropsWithChildren } from 'react'
import { Header } from './Header/Header.tsx'
import { Footer } from './Footer/Footer.tsx'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={' bg-primary h-full'}>
      <div className={'container mx-auto text-white flex flex-col'}>
        <Header />
        <main className={'flex-content mb-10'}>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
