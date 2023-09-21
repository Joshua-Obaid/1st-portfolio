import { BallCanvas } from './canvas'
import { SectionWrapper } from './hoc'
import { technologies } from '../constants'


// const techStack = ['html', 'css', 'javascript', 'git', 'reactjs', 'threejs'] 


function Tech() {
    return (
        <div>
            <h2 className='section-title'>Tech Stack</h2>
            <div className='flex ball-cont'>
                {technologies.map((tech) => (
                    <div key={tech.name}>
                        <BallCanvas icon={tech.icon} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Tech, 'tech')