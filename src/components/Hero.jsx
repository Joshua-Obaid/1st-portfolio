import { ComputerCanvas } from './canvas'
import { FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'


export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container flex hero" >
                <div className="hero-text flex">
                    <h1 className="hero-title">Front-End <br /> React Developer</h1>
                    <p className="hero-desc blue-txt">Hi, I'm Joshua Obaid. I develop 3d visuals , user interfaces and  web applications.</p>
                    <a href='https://github.com/Joshua-Obaid/' target='_blank' className='git-link'><FiGithub size={25} /></a>
                </div>
                <div className='computer-model'>
                    <ComputerCanvas />
                </div>


            </div>
        </section>
    )
}