import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../animated-letters';
import { useEffect, useState } from 'react';
import Project from './project';
import XeldaLogo from '../../assets/img/xelda-logo.jpeg';

const Projects = () => {

	// letter animation
	const [letterClass, setLetterClass] = useState('text-animate')
	useEffect(() => {
		setTimeout(() => {
			return setLetterClass('text-animate-hover')
		}, 4000)
	}, [])

	// n projects
	const raw = {
		title: 'Testing 123',
		images: [
			// {
			// 	// source: XeldaLogo,
			// 	source: '../../../assets/img/xelda-logo.jpeg',
			// 	alt: 'Xelda logo'
			// },
			<img source={XeldaLogo} alt='Xelda-logo' />
		]
	}
	const projects = [<Project projectRaw={raw} index={0} key={0} />, <Project projectRaw={raw} index={1} key={1} />]

	return (
		<>
			<div className="container projects-page">
				<div className="scrollable text-zone">
					<h1 color='#fff'>
						<AnimatedLetters letterClass={letterClass} index={15} letters={[...'My projects']} />
					</h1>
					{projects}
				</div>
			</div>
			<Loader type="pacman" />
		</>
	)
}

export default Projects