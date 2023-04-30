import './index.scss'
import Logo from '../../assets/img/dummy-logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AnimatedLetters from '../animated-letters'

const Home = () => {

	const [letterClass, setLetterClass] = useState('text-animate')
	const nameChars = ['a', 'm']
	const subHeadingChars = [...'Software developer.']

	return (
		<div className="container home-page">
			<div className="text-zone">
				<h1> 
					<AnimatedLetters letterClass={letterClass} letters={['H', 'i', ',']} index={11} />
					<br />
					<AnimatedLetters letterClass={letterClass} letters={['I', '\'', 'm']} index={14} />
					<img src={Logo} alt="developer" />
					<AnimatedLetters letterClass={letterClass} letters={nameChars} index={17} />
					<br />
					<AnimatedLetters letterClass={letterClass} letters={subHeadingChars} index={20} />
				</h1>
				<h2> Software Developer with an interest in back-end services</h2>
				<Link to="/contact" className='flat-button'> CONTACT ME </Link>
			</div>
		</div>
	)
}

export default Home