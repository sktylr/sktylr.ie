import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../animated-letters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import Logo from './logo';

const Contact = () => {

	emailjs.init(import.meta.env.REACT_APP_EMAIL_PUBLIC_KEY);

	const refForm = useRef();
	const [letterClass, setLetterClass] = useState('text-animate')

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass('text-animate-hover')
		}, 4000)
	}, [])

	const sendEmail = (email) => {
		email.preventDefault()

		emailjs
		  .sendForm(process.env.REACT_APP_EMAIL_SERVICE_KEY, process.env.REACT_APP_EMAIL_TEMPLATE_KEY, refForm.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
		  .then(
			() => {
			  alert('Message successfully sent!')
			  window.location.reload(false)
			},
			() => {
			  alert('Failed to send the message, please try again')
			}
		  )
	  }

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
						I'm always open to new opportunities, particularly in server-side development. Feel free to reach out for a chat using the form below! 
					</p>
					<div className='contact-form'>
						<form ref={refForm} onSubmit={sendEmail}>
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
									<input type='submit' className='flat-button' value='SEND' />
								</li>
							</ul>
						</form>
					</div>
				</div>
				<Logo />
			</div>
			<Loader type='pacman' />
		</>
	)
}

export default Contact;