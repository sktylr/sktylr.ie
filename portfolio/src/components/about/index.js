import AnimatedLetters from '../animated-letters';
import './index.scss'

const About = () => {

	return (
		<div className='container about-page'>
			<h1>
				<AnimatedLetters
					letters={'About me'.split()}
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
	)
}

export default About;