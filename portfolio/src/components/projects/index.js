import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../animated-letters';
import { useEffect, useState } from 'react';
import Project from './project';
import RawProjects from '../../assets/data/projects.json'

const Projects = () => {

	// letter animation
	const [letterClass, setLetterClass] = useState('text-animate')
	useEffect(() => {
		setTimeout(() => {
			return setLetterClass('text-animate-hover')
		}, 4000)
	}, [])

	// n projects
	const projects = []

	for (let i = 0; i < RawProjects.projects.length; i++)	{
		console.log('FIRST LOOP ' + i);
		let image = RawProjects.projects[i].image;
		projects.push(
			<Project projectRaw={RawProjects.projects[i]} img={image} index={i} key={i} />
		)
	}

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