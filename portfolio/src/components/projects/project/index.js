import './index.scss';
import LazyShow from './lazy-show';

const renderText = (text) =>	(
	<div className='text-side'>
		{text.map((paragraph, i) => (
			<p key={i}>
				{paragraph}
			</p>
		))}
	</div>
)

const renderImage = (image) => (
	<div className='image-side'>
		<div>
			<img src={image} alt=''/>
		</div>
	</div>
)

const Project = ({ projectRaw, index, img }) => {

	const toRender = []

	// choose which side to render the text on
	if (index % 2 === 1)	{ 
		toRender.push(renderImage(img), renderText(projectRaw.content))
	} else toRender.push(renderText(projectRaw.content), renderImage(img))

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