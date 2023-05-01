import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../animated-letters';
import { useEffect, useState } from 'react';

const Contact = () => {

	const [letterClass, setLetterClass] = useState('text-animate')

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass('text-animate-hover')
		}, 4000)
	}, [])

	return (
		<>
			<div className='container contact-page'>
				<div className='text-zone'>
					<h1>
						<AnimatedLetters 
							letters={[...'Contact me']}
							index={15}
							letterClass={letterClass}
						/>
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra cursus erat, fringilla vestibulum urna consequat sed. Sed sit amet pellentesque risus. Pellentesque tempus elit et tempus elementum. Nullam viverra pellentesque justo, sed commodo neque consequat vitae. Integer convallis erat non tristique suscipit. 
					</p>
					<div className='contact-form'>
						<form>
							<ul>
								<li className='half'>
									<input type='text' name='name' placeholder='Name' required />
								</li>
								<li className='half'>
									<input type='email' name='email' placeholder='someone@example.com' required />
								</li>
								<li>
									<input placeholder='Subject' type='text' name='subject' required />
								</li>
								<li>
									<textarea placeholder='Message' name='message' required />
								</li>
								<li>
									<input type='submit' className='flat-button' value='Send' />
								</li>
							</ul>
						</form>
					</div>
				</div>
			</div>
			<Loader type='pacman' />
		</>
	)
}

export default Contact;