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

	const getImage = () => {
		return (
			<img src={XeldaLogo} alt='xelda logo' />
		)
	}

	// n projects
	const raw = {
		title: 'Testing 123',
		content:	[
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit. Quis blandit turpis cursus in hac habitasse platea. Pretium fusce id velit ut tortor pretium viverra suspendisse potenti. Amet commodo nulla facilisi nullam vehicula ipsum a. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Tristique risus nec feugiat in. Viverra ipsum nunc aliquet bibendum enim. Egestas fringilla phasellus faucibus scelerisque eleifend donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Viverra aliquet eget sit amet tellus cras adipiscing. Sed egestas egestas fringilla phasellus. In nibh mauris cursus mattis. Enim neque volutpat ac tincidunt vitae semper quis lectus. Facilisis gravida neque convallis a cras semper auctor neque vitae.',
			'Elementum pulvinar etiam non quam lacus suspendisse faucibus. Lorem ipsum dolor sit amet. Pellentesque id nibh tortor id. Non odio euismod lacinia at quis. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pharetra sit amet aliquam id diam maecenas ultricies. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Facilisis sed odio morbi quis commodo odio aenean sed. Ac turpis egestas maecenas pharetra. Morbi tincidunt augue interdum velit euismod. Iaculis nunc sed augue lacus viverra. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Non tellus orci ac auctor augue mauris augue neque. Sit amet massa vitae tortor condimentum lacinia.',
			'Turpis in eu mi bibendum neque egestas congue quisque egestas. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Turpis egestas sed tempus urna. Vel pharetra vel turpis nunc eget lorem dolor sed. Sit amet nulla facilisi morbi tempus iaculis urna id. Erat velit scelerisque in dictum non consectetur a erat. Mauris augue neque gravida in fermentum et sollicitudin. Vivamus at augue eget arcu dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Consequat id porta nibh venenatis cras sed felis eget velit.'
		]
	}
	const projects = [<Project projectRaw={raw} img={XeldaLogo} index={0} key={0} />, <Project projectRaw={raw} index={1} key={1} />]

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