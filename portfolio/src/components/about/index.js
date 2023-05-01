import { useEffect, useState } from 'react';
import AnimatedLetters from '../animated-letters';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faJava, faPython } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie ac. Erat imperdiet sed euismod nisi porta. Lobortis elementum nibh tellus molestie nunc non. Aliquam ut porttitor leo a diam sollicitudin tempor. 
					</p>
					<p>
						Quisque non tellus orci ac auctor. Egestas sed tempus urna et pharetra pharetra massa. Nulla facilisi nullam vehicula ipsum a arcu cursus. Cursus sit amet dictum sit amet justo donec enim diam. Erat pellentesque adipiscing commodo elit at imperdiet dui. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus.
					</p>
					<p>
						Vel risus commodo viverra maecenas. Neque laoreet suspendisse interdum consectetur libero. Urna duis convallis convallis tellus id interdum velit laoreet. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Pellentesque adipiscing commodo elit at.
					</p>
				</div>

				<div className='stage-cube-container'>
					<div className='cube-spinner'>
						<div className='face1'>
							<FontAwesomeIcon icon={faJava} color='#dd0031' />
						</div>
						<div className='face2'>
							<FontAwesomeIcon icon={faPython} color='#dd0031' />
						</div>
						<div className='face3'>
							<FontAwesomeIcon icon={faGitAlt} color='#ec4d28' />
						</div>
						<div className='face4'>
							<FontAwesomeIcon icon={faPython} color='#dd0031' />
						</div>
						<div className='face5'>
							<FontAwesomeIcon icon={faJava} color='#dd0031' />
						</div>
						<div className='face6'>
							<FontAwesomeIcon icon={faGitAlt} color='#ec4d28' />
						</div>
					</div>
				</div>
			</div>

			<Loader type='pacman' />
		</>
	)
}

export default About;