import './index.scss'
import Logo from '../../assets/img/dummy-logo.png'
import { Link } from 'react-router-dom'

const Home = () => {

	return (
		<div className="container home-page">
			<div className="text-zone">
				<h1> Hi, <br /> I'm
				<img src={Logo} alt="developer" />
				am
				<br />
				Software developer
				</h1>
				<h2> Software Developer with an interest in back-end services</h2>
				<Link to="/contact" className='flat-button'> CONTACT ME </Link>
			</div>
		</div>
	)
}

export default Home