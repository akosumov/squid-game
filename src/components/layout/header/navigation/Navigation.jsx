import React from 'react'
import { Link } from 'react-router-dom'
import { list } from './list'
import netflixLogoImage from '../../../../assets/images/netflix-logo.png'

const Navigation = () => {
	return (
		<ul className='list-none flex item-center'>
			{list.map((item, index) => (
				<li key={item} className='inline-block px-4'>
					{index !== 2 ? (
						<Link
							to={`/${item.toLocaleLowerCase()}`}
							className='block text-white opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out'
						>
							{item}
						</Link>
					) : (
						<img
							alt=''
							src={netflixLogoImage}
							width={35}
							draggable={false}
							className='block mx-5'
						/>
					)}
				</li>
			))}
		</ul>
	)
}

export default Navigation
