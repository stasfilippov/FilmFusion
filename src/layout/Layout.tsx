import React, {PropsWithChildren} from 'react'
import {Header} from './Header/Header.tsx'
import {Footer} from './Footer/Footer.tsx';

export const Layout = ({children}: PropsWithChildren) => {
	return (
		<div className={'text-white bg-primary'}>
			<div className={'container mx-auto'}>
				<Header/>
				<main>{children}</main>
				<Footer/>
			</div>
		</div>
	)
}
