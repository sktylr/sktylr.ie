import "./index.scss"
import LazyShow from "./lazy-show"

const Text = ({ text }) => (
    <div className="text-side">
        {text.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
    </div>
)

const Image = ({ image }) => (
    <div className="image-side">
        <div style={{ maxWidth: "200px", maxHeight: "200px" }}>
            <img
                src={`/src/assets/img/${image.source}`}
                alt={image.alt}
                style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
        </div>
    </div>
)

const Project = ({ projectRaw, index, img }) => {
    const toRender = []
    const left = index % 2 === 0

    // optional rendering of a link to a project site (github, client website etc), returns null (renders as blank) if not there
    const externalLink = projectRaw.link ? (
        <div className="external-link">
            <a
                href={projectRaw.link.url}
                className="flat-button external-link"
                target="_blank"
                rel="noreferrer"
            >
                {" "}
                {projectRaw.link.alt}{" "}
            </a>
        </div>
    ) : null

    // choose which side to render the text on
    if (!left) {
        toRender.push(<Image image={img} />, <Text text={projectRaw.content} />)
    } else
        toRender.push(<Text text={projectRaw.content} />, <Image image={img} />)

    const content = (
        <>
            {left ? (
                <>
                    <Text text={projectRaw.content} />
                    <Image image={img} />
                </>
            ) : (
                <>
                    <Image image={img} />
                    <Text text={projectRaw.content} />
                </>
            )}
            {externalLink}
        </>
    )

    return (
        <LazyShow left={left}>
            <h2 className="sub-heading"> {projectRaw.title} </h2>
            <div className="project-container">{content}</div>
        </LazyShow>
    )
}

export default Project
