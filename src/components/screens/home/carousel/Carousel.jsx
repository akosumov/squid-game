import React, { useState } from 'react'
import Controls from './Controls'
import VideosLine from './videosLine/VideosLine'

import t1Img from '../../../../assets/images/thumbnails/thumbnail-1.jpg'
import t2Img from '../../../../assets/images/thumbnails/thumbnail-2.jpeg'
import t3Img from '../../../../assets/images/thumbnails/thumbnail-3.jpeg'
import t4Img from '../../../../assets/images/thumbnails/thumbnail-4.jpeg'
import t5Img from '../../../../assets/images/thumbnails/thumbnail-5.jpeg'

const initialSlides = [
	{
		_id: '27sw8',
		thumbnailPath: t1Img,
		videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	},
	{
		_id: '276j8',
		thumbnailPath: t2Img,
		videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	},
	{
		_id: '278',
		thumbnailPath: t3Img,
		videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	},
	{
		_id: '2a78',
		thumbnailPath: t4Img,
		videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	},
	{
		_id: '27as',
		thumbnailPath: t5Img,
		videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	},
]

const Carousel = () => {
	const [slides] = useState(initialSlides)
	const [currentIndex, setCurrentIndex] = useState(0)
	return (
		<div className='mt-20'>
			<div className='flex items-center mb-5'>
				<div className='text-white opacity-90 text-lg font-medium mr-20'>
					{currentIndex + 1} series
				</div>
				<Controls
					slidesLength={slides.length}
					setCurrentIndex={setCurrentIndex}
					currentIndex={currentIndex}
				/>
			</div>
			<VideosLine
				slides={slides}
				setCurrentIndex={setCurrentIndex}
				currentIndex={currentIndex}
			/>
		</div>
	)
}

export default Carousel
