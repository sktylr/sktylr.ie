import './index.scss';
import LazyShow from './lazy-show';
// import Images from '../../../assets/img';

const locateImage = (path) => (
	require(`../../../assets/img/${path}`)
)

const renderText = (text) =>	(
	<div className='text-side'>
		{text.map((paragraph, i) => (
			<p key={i}>
				{paragraph}
			</p>
		))}
	</div>
)

const renderImage = (image) => {
	console.log(image);

	return (
	<div className='image-side'>
		<div>
			<img src={locateImage(image.source)} alt='' />
		</div>
	</div>
)
	}

const Project = ({ projectRaw, index, img }) => {

	const toRender = []
	let left = true;

	// choose which side to render the text on
	if (index % 2 === 1)	{ 
		toRender.push(renderImage(img), renderText(projectRaw.content))
		left = false;
	} else toRender.push(renderText(projectRaw.content), renderImage(img))

	return (
		<LazyShow left={left}>
			<h2 className='sub-heading'> {projectRaw.title} </h2>
			<div className='project-container'>
				{toRender}
			</div>
		</LazyShow>
	)
}

export default Project;