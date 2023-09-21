import { SectionWrapper } from './hoc'
import { project1, project2, project3 } from '../assets'
import { Tilt } from 'react-tilt'
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.7, 0.75)}>
            <Tilt className='project-card' options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}>
                <img src={index === 0 ? project1 : index === 1 ? project2 : project3} />
                <p className="project-card-title">{project.name}</p>
                <p className="project-card-desc">{project.desc}</p>
                <div className="project-link-cont flex">
                    <a href={project.demo} target='_blank' className="project-link project-link-1">Live Demo</a>
                    <a href={project.gh} target='_blank' className="project-link project-link-2">See code</a>
                </div>
            </Tilt>
        </motion.div>
    )
}

function Projects() {
    const projectArray = [
        {
            name: 'Netflix clone',
            desc: 'This is a front-end netflix clone which was made using react technologies namely, react-router, react compound components and styled components.It was developed as part of a scrimba course.',
            demo:'https://netflix-frontend-clone-ebon.vercel.app/',
            gh:'https://github.com/Joshua-Obaid/netflix-clone'
        },
        {
            name: 'Cryptocurrency web app',
            desc: 'This is cryptocurrency web app that can show the prices of 40 cryptocurrencies fetched from the popular coin gecko api.It mainly uses react and react-router-dom. '
            ,demo:'https://crypto-coin-seven.vercel.app/',
            gh:'https://github.com/Joshua-Obaid/crypto-coin'
        }
        ,
        {
            name: 'E-commerce site',
            desc: 'This is a front-end e-commerce site which displays numerous items and allows us to add them to cart and remove them. It is made by react and react-router-dom   ',
            demo:'https://e-commerce-git-main-joshua-obaid.vercel.app/',
            gh:'https://github.com/Joshua-Obaid/e-commerce'
        }
    ]
    return (
        <>
            <h2 className='section-title'>Projects</h2>
            <p className='project-p blue-txt'>Each project is a unique piece of development.</p>
            <div className="projects-cont flex">
                {projectArray.map((project, index) => (
                    <ProjectCard project={project} index={index} key={index} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Projects, 'projects')