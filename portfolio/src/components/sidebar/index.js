import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFolderOpen, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
	return (
		<div className='nav-bar'>
			<Link className='logo' to='/'>
				<span>
					ST
					<div>
						SAM
						<br />
						TAYLOR
					</div>
				</span>
			</Link>
			<nav>
				<NavLink exact="true" activeclassname="active" to="/">
					<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
				</NavLink>
				<NavLink exact="true" activeclassname="active" to="/about" className="about-link">
					<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
				</NavLink>
				<NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
					<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
				</NavLink>
				<NavLink exact="true" activeclassname="active" to="/projects" className="projects-link">
					<FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
				</NavLink>
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
		</div>
	)
}

export default Sidebar