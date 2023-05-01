import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Hamburger = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className='relative'>
			<button onClick={e => setIsShow(!isShow)}>
				<HiOutlineMenuAlt3 size={40} color='white' className='opacity-90' />
			</button>
			{isShow && (
				<ul className='absolute rounded-xl bg-white shadow-lg p-4 w-32 right-0 keyframe'>
					{Array(5)
						.fill('')
						.map((item, index) => (
							<li key={`key:${index}`}>
								<Link
									to={'/'}
									className='block py-1 hover:text-purple-600 duration-300 ease-out transition-colors'
								>
									Item.{index}
								</Link>
							</li>
						))}
				</ul>
			)}
		</div>
	)
}

export default Hamburger
