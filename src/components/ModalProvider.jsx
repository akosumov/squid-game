import { createContext, useContext, useMemo, useState } from 'react'
import Modal from './screens/home/Modal'

const ModalContext = createContext({})

export const ModalProvider = ({ children }) => {
	const [videoUrl, setVideoUrl] = useState('')
	const value = useMemo(() => ({ videoUrl, setVideoUrl }), [videoUrl])

	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useModal = () => useContext(ModalContext)
