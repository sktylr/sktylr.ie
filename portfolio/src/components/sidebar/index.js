import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFolderOpen, faHome, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

	const [showNav, setShowNav] = useState(false);

	return (
		<div className='nav-bar'>
			<Link
				className='logo'
				to='/'
				onClick={() => setShowNav(false)}
			>
				<span>
					ST
					<div>
						SAM
						<br />
						TAYLOR
					</div>
				</span>
			</Link>
			<nav className={showNav ? 'mobile-show' : ''}>
				<NavLink
					exact="true"
					activeclassname="active"
					to="/"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
				</NavLink>
				<NavLink
					// exact="true"
					className='about-link'
					activeclassname="active"
					to="/about"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
				</NavLink>
				<NavLink
					// exact="true"
					className='contact-link'
					activeclassname="active"
					to="/contact"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
				</NavLink>
				<NavLink
					// exact="true"
					className='projects-link'
					activeclassname="active"
					to="/projects"
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
				</NavLink>
				<FontAwesomeIcon
					onClick={() => setShowNav(false)}
					icon={faClose}
					color='#ffd700'
					size='3x'
					className='close-icon'
				/>
			</nav>
			<ul>
				<li>
					<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sktylr">
						<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
					</a>
				</li>
				<li>
					<a target="_blank" rel="noreferrer" href="https://www.github.com/sktylr">
						<FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
					</a>
				</li>
			</ul>
			<FontAwesomeIcon
				onClick={() => setShowNav(true)}
				icon={faBars}
				color='#ffd700'
				size='3x'
				className='hamburger-icon'
			/>
		</div>
	)
}

export default Sidebar