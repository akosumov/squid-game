import React from 'react'
import BgImages from '../../assets/images/bg-squid-game.jpeg'
import Modal from '../screens/home/Modal'
import Header from './header/Header'
import SocialMedia from './SocialMedia'

const Layout = ({ children }) => {
	return (
		<div
			className='p-12 relative bg-cover bg-no-repeat'
			style={{
				backgroundImage: `url(${BgImages})`,
			}}
		>
			<div className='gradient'></div>
			<div className='relative z-1'>
				<Header />
				<SocialMedia />
				<Modal />
				{children}
			</div>
		</div>
	)
}

export default Layout
