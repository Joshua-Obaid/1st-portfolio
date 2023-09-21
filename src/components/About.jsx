import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { SectionWrapper } from './hoc'
import { fadeIn, textVariant } from '../utils/motion'


function ServiceCard({ index, text }) {
    return (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={fadeIn('right', 'spring', 0.75 * index, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className='bg-tertiary rounded-[20px] py-3.5 px-7 min-h-[280px] flex justify-evenly items-center flex-col card-text'
                >
                    <h3 className='text-[18px] my-2 font-bold'>{index == 0 ? 'Introduction' : index == 1 ? 'My Journey' : 'My Job'}</h3>
                    <p>{text}</p>
                </div>
            </motion.div>
        </Tilt>
    )
}

function About() {
    const cardText = ["A dedicated Front-end React Developer based in Lahore , Pakistan. I'm studying to be a world-class mathematician and physics researcher. I have a great drive and passion of learning about new technologies and want to myself invent cutting edge computer technologies in the future that benefit society ."
        ,
        "I initially got into coding by reading books on python and Object Oriented Programming .Then I took a more serious and project based approach by taking Scrimba's Frontend developer path that taught me all the necessay concepts using coding challenges, quizes and by developing numerous projects along the way. Their team of world renowned computer science teachers is fantastic."
        ,
        "I use Reactjs to create frontend web applications and user interfaces.These include e-commerce , landing pages and other sites that may use an API to obtain their data. I implement the popular standard library for routing in React called React Router . I alse have experience with using Threejs and react-three/fibre to display 3D objects and models on my websites."]
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className='section-title'>About Me</h2>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.5, 1)}
                className='about-desc blue-txt'
            >
                As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React and Threejs. I excel in developing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.

            </motion.p>
            <div className="mt-19 flex flex-wrap gap-11 card-cont">
                {cardText.map((text, index) => (
                    <ServiceCard key={index} index={index} text={text} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, 'about')