import { Link, NavLink } from "react-router-dom"
import { CgMenuRightAlt } from 'react-icons/cg'
import { ImCross } from 'react-icons/im'
import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const aboutEl = document.getElementById('about')
    const projectsEl = document.getElementById('projects')
    const contactsEl = document.getElementById('contacts')

    const [sticky, setSticky] = useState(false)
    // const handleScroll = () => {
    //     if (window.scrollY > 150) {
    //         setSticky(true)
    //     } else (
    //         setSt(false)
    //     )
    // }
    // window.addEventListener('scroll', handleScroll)

    return (
        <nav className={!open && `${sticky ? 'sticky-nav' : 'sticky-nav'}`}>
            <div className='container flex nav-cont' >
                <Link to='/' onClick={()=>window.scrollTo(0, 0)} id="nav-title">Joshua.dev</Link>
                <button className="menu-btn"
                    onClick={() => setOpen(true)}><CgMenuRightAlt color="white" size={30} /></button>
                <ul className={`flex nav-list ${open ? ' open' : 'close'}`}>
                    <button className="close-btn"
                        onClick={() => setOpen(false)}><ImCross color="white" size={27} /></button>
                    <li>
                        <NavLink to='/' onClick={()=>window.scrollTo(0, 0)} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='#about'
                            onClick={() => aboutEl.scrollIntoView()}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='#projects' onClick={() => projectsEl.scrollIntoView()}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to='#contacts' onClick={() => contactEl.scrollIntoView()}>Contacts</NavLink>
                    </li>
                </ul>
            </div>
        </nav >
    )
}