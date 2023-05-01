import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from './components/screens/admin/Admin'
import Home from './components/screens/home/Home'
import { ModalProvider } from './components/ModalProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ModalProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/admin' element={<Admin />} />
				</Routes>
			</Router>
		</ModalProvider>
	</React.StrictMode>
)
