import React from 'react'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'

const stylesButton = 'duration-300 ease-in-out transition-opacity'
const disabledButtonStyle = 'opacity-30 cursor-not-allowed'
const activeButtonStyle = 'opacity-90 hover:opacity-90'

const Controls = ({ slidesLength, setCurrentIndex, currentIndex }) => {
	const isPrevDisabled = currentIndex === 0
	const isNextDisabled = currentIndex + 1 === slidesLength

	const prevHandler = () => {
		!isPrevDisabled && setCurrentIndex(prev => prev - 1)
	}

	const nextHandler = () => {
		!isNextDisabled && setCurrentIndex(prev => prev + 1)
	}

	return (
		<div className='text-white '>
			<button
				onClick={prevHandler}
				className={`${stylesButton} ${
					isPrevDisabled ? disabledButtonStyle : activeButtonStyle
				}`}
			>
				<HiChevronLeft size={26} />
			</button>
			<button
				onClick={nextHandler}
				className={`${stylesButton} ${
					isNextDisabled ? disabledButtonStyle : activeButtonStyle
				}`}
			>
				<HiChevronRight size={26} />
			</button>
		</div>
	)
}

export default Controls
