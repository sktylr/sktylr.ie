import './index.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../animated-letters'
import Logo from './logo'
import Loader from 'react-loaders'

const SLetter = () => (
	<span className='s'>
		S
	</span>
)

const Home = () => {

	const [letterClass, setLetterClass] = useState('text-animate')
	const nameChars = ['a', 'm', ',']
	const subHeadingChars = [...'A software developer']

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass('text-animate-hover')
		}, 4000)
	}, [])

	return (
		<>
			<div className="container home-page">
				<div className="text-zone">
					<h1> 
						<AnimatedLetters letterClass={letterClass} letters={['H', 'i', ',']} index={11} />
						<br />
						<AnimatedLetters letterClass={letterClass} letters={['I', '\'', 'm']} index={14} />
						&nbsp;
						<SLetter />
						<AnimatedLetters letterClass={letterClass} letters={nameChars} index={17} />
						<br />
						<AnimatedLetters letterClass={letterClass} letters={subHeadingChars} index={21} />
					</h1>
					<h2> Computer Science student with an interest in back-end services</h2>
					<Link to="/contact" className='flat-button'> CONTACT ME </Link>
				</div>
				<Logo />
			</div>
			<Loader type='pacman' />
		</>
	)
}

export default Home