import React from 'react'
import { SiInstagram, SiFacebook, SiTwitter } from 'react-icons/si'

const stylesIcon =
	'text-white hover:opacity-100 opacity80 duration-300 ease-in-out transition-opacity'

const socialMedias = [
	{
		icon: <SiInstagram size='17' className={stylesIcon} />,
		link: '/inst',
	},
	{
		icon: <SiFacebook size='17' className={stylesIcon} />,
		link: '/facebook',
	},
	{
		icon: <SiTwitter size='17' className={stylesIcon} />,
		link: '/twitter',
	},
]

const SocialMedia = () => {
	return (
		<div
			className='absolute right-1 z-10'
			style={{
				top: '40%',
			}}
		>
			{socialMedias.map(({ icon, link }) => (
				<a
					href={link}
					key={link}
					target='_blank'
					rel='noreferrer'
					className='my-10 block'
				>
					{icon}
				</a>
			))}
		</div>
	)
}

export default SocialMedia
