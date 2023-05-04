import './index.scss';
import LazyShow from './lazy-show';

const locateImage = (path) => (
	require(`../../../assets/img/${path}`)
)

const Text = (text) =>	(
	<div className='text-side'>
		{text.map((paragraph, i) => (
			<p key={i}>
				{paragraph}
			</p>
		))}
	</div>
)

const Image = (image) => (
	<div className='image-side'>
		<div>
			<img src={locateImage(image.source)} alt={image.alt} />
		</div>
	</div>
)


const Project = ({ projectRaw, index, img }) => {

	const toRender = []
	const left = index % 2 === 0;

	// optional rendering of a link to a project site (github, client website etc), returns null (renders as blank) if not there
	const externalLink = () => (
		projectRaw.link ? (
			<div className='external-link'>
				<a href={projectRaw.link.url} className='flat-button external-link' target='_blank' rel='noreferrer'> {projectRaw.link.alt} </a>
			</div>
		) : null
	)

	// choose which side to render the text on
	if (!left)	{ 
		toRender.push(Image(img), Text(projectRaw.content))
	} else toRender.push(Text(projectRaw.content), Image(img))

	return (
		<LazyShow left={left}>
			<h2 className='sub-heading'> {projectRaw.title} </h2>
			<div className='project-container'>
				{toRender}
				{externalLink()}
			</div>
		</LazyShow>
	)
}

export default Project;