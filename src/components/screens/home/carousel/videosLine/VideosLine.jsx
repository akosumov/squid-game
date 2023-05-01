import React from 'react'
import { useModal } from '../../../../ModalProvider'
import VideoItem from './VideoItem'

const VideosLine = ({ slides, currentIndex, setCurrentIndex }) => {
	const { setVideoUrl } = useModal()

	const playHandler = (idx, videoUrl) => {
		setCurrentIndex(idx)
		setVideoUrl(videoUrl)
	}

	const count = currentIndex * 192

	return (
		<div
			className='flex items-end h-32 transition-all duration-300 ease-in-out'
			style={{
				transform: currentIndex ? `translateX(-${count}px)` : '',
			}}
		>
			{slides.map((slide, idx) => {
				const isActive = idx === currentIndex
				return (
					<VideoItem
						key={slide._id}
						slide={slide}
						clickHandler={() => playHandler(idx, slide.videoUrl)}
						isActive={isActive}
					/>
				)
			})}
		</div>
	)
}

export default VideosLine
