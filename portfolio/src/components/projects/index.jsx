// const Loader = require("react-loaders")
import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../animated-letters"
import { useEffect, useState } from "react"
import Project from "./project"
import RawProjects from "../../assets/data/projects.json"

const Projects = () => {
    // letter animation
    const [letterClass, setLetterClass] = useState("text-animate")
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 4000)
    }, [])

    const projects = RawProjects.projects.map((project, index) => (
        <Project
            projectRaw={project}
            img={project.image}
            index={index}
            key={index}
        />
    ))

    return (
        <>
            <div className="container projects-page">
                <div className="scrollable text-zone">
                    <h1 color="#fff">
                        <AnimatedLetters
                            letterClass={letterClass}
                            index={15}
                            letters={[..."My projects"]}
                        />
                    </h1>
                    {projects}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Projects
