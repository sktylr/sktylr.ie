import './index.scss';
// import Logo from '../../../assets/img/dummy-logo.png'
import XeldaLogo from '../../../assets/img/xelda-logo.jpeg';
import LazyShow from './lazy-show';
import { useEffect, useState } from 'react';

function renderText(text)	{

	// const toRender = []

	// const renderIndividualText = (individ) => {
	// 	return (
	// 		0
	// 	)
	// }

	return (
		<div className='text-side'>
			{text}
		</div>
	)
}

const dummyRender = (image) => (
	<img src={image} alt='' />
)

const Project = ({ projectRaw, index, img }) => {

	const RenderImages = ({ images, image} ) =>	{
	
		// let toRender = []
	
		// const renderIndividualImage = (image, index) => {
		// 	// console.log(image);
		// 	// console.log(typeof image.source);
		// 	// console.log(index);
	
		// 	// const source = '' + image.source
		// 	// return (
		// 	// 	<img src={source} alt={image.alt} key={index}/>
		// 	// )
		// 	console.log(image);
		// 	return image
		// 	// return <img src={XeldaLogo} alt='Xelda logo' key={index}/>
		// }
	
		// for (let i = 0; i < images.length; i++)	{
		// 	toRender.push(renderIndividualImage(images[i], i))
		// }
	
		// console.log('TO RENDER' + toRender);
		
		// // toRender = [<img src={XeldaLogo} alt='Xelda logo' key={0} />,]
		// toRender = () => (<img src={image.source} alt={image.alt} />)
	
		const [displayImage, setDisplayImage] = useState();
		useEffect(() => {
			import(`../${image}`).then(displayImage => {
				setDisplayImage(displayImage.default);
			});
		}, [image]);
	
		return (
			<div className='image-side'>
				<div>
					{/* {toRender} */}
					{/* <img src={image.source} alt={image.alt} /> */}
					{displayImage && <img src={displayImage} alt='' />}
				</div>
			</div>
		)
	}

	let toRender = []

	// const images = <img src={Logo} alt='dummy-logo'/>
	const images = RenderImages(projectRaw.images, projectRaw.image)
	// const images = img
	const text = (
		<>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
		</>
	)

	// choose which side to render the text on
	if (index % 2 === 1)	{ 
		toRender.push(RenderImages(images), renderText(text))
	} else toRender.push(renderText(text), RenderImages(images))

	toRender = [renderText(text), dummyRender(img)]

	return (
		<LazyShow>
			<h2 className='sub-heading'> {projectRaw.title} </h2>
			<div className='project-container'>
				{toRender}
			</div>
		</LazyShow>
	)
}

export default Project;