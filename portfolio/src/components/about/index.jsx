import { useEffect, useState } from 'react';
import AnimatedLetters from '../animated-letters';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faGitAlt,
	faJava,
	faPython,
	faJsSquare,
 } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders'
import CV from '../../assets/data/CV.pdf'

const About = () => {

	const [letterClass, setLetterClass] = useState('text-animate')

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass('text-animate-hover')
		}, 4000)
	}, [])

	return (
		<>
			<div className='container about-page'>
				<div className='text-zone'>
					<h1>
						<AnimatedLetters
						letterClass={letterClass}
							letters={[...'About me']}
							index={15}
						/>
					</h1>
					<p>
						I'm a driven software developer with a preference towards server-side development. I'm interested in defining and working with powerful API's to facilitate the transport of information over the internet.
					</p>
					<p>
						I'm currently undertaking a Bachelor of the Arts in Computer Science in Trinity College in Dublin, Ireland and I have finished my third year of studies.
						My skills include Java, Python, REST API's, Git and the Django REST Framework.
                        Take a look at my CV or GitHub account for more information on projects I've been working on!
					</p>
					<p>
						Alongside any college work, I always have some form of project on the go to expand my skills and also solve a problem I've encountered in my day to day life. I'm also a keen cyclist and have an interest in photography.
					</p>
					<a href={CV} target='_blank' rel='noreferrer' className='flat-button'>
						MY CV
					</a>
				</div>

				<div className='stage-cube-container'>
					<div className='cube-spinner'>
						<div className='face1'>
							<FontAwesomeIcon icon={faJava} color='#007396' />
						</div>
						<div className='face2'>
							<FontAwesomeIcon icon={faPython} color='#ffe873' />
						</div>
						<div className='face3'>
							<FontAwesomeIcon icon={faDatabase} color='#008bb9' />
						</div>
						<div className='face4'>
							<FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
						</div>
						<div className='face5'>
							<FontAwesomeIcon icon={faMicrochip} color='#dd0031' />
						</div>
						<div className='face6'>
							<FontAwesomeIcon icon={faGitAlt} color='#f34f29' />
						</div>
					</div>
				</div>
			</div>
			<Loader type='pacman' />
		</>
	)
}

export default About;
