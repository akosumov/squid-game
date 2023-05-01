import React from 'react'
import { IoPlay } from 'react-icons/io5'

const PlayButton = () => {
	return (
		<div
			className='absolute top-0 left-0 keyframe w-full h-full flex item-center justify-center z-1'
			style={{
				backgroundColor: 'rgba(255,40,126,.15)',
			}}
		>
			<div
				className='circle-effect absolute top-8 z-1 opacity-40'
				style={{ left: '4.7rem' }}
			/>
			<div
				className='circle-effect absolute top-12 z-2 opacity-40'
				style={{ left: '4.7rem' }}
			/>
			<div className='circle-effect z-3 mt-10 mr-3'>
				<IoPlay size={20} color='white' />
			</div>
		</div>
	)
}

export default PlayButton
