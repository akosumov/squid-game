import React from 'react'
import Layout from '../../layout/Layout'
import Details from './Details'
import Content from './Content'
import Soldier from './Soldier'
import Carousel from './carousel/Carousel'

const Home = () => {
	return (
		<Layout>
			<Details />
			<Content />
			<Soldier />
			<Carousel />
		</Layout>
	)
}

export default Home
