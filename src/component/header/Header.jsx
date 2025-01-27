import React, { useRef, useState } from 'react'
import './header.css'
import './dashboard.css'
import { videoBg, icon } from '../../assets/imports'

function Header() {
    const [lines, setLines] = useState(false);
    const inputRef = useRef();
    const Nav = () => (
        <>
            <li><a href='#home'>Home</a></li>
            <li><a href="#attorney">Attorneys</a></li>
            <li><a href="#practice">Practice Areas</a></li>
            <li><a href="#about">About Us</a></li>
        </>
    )

    return (
        <>

            <section id='welcome-video'>

                <div className="header-container">

                    <div className='icon'>
                        <img src={icon} alt="Icon" />
                    </div>
                    <div className="nav">
                        <ul>
                            <Nav />
                        </ul>
                    </div>
                    <div className="contact">
                        <button type='button'>Contact Now</button>
                    </div>
                    <div className="menu" aria-label='Menu' onClick={() => (setLines(!lines))}>
                        {
                            lines ? (
                                <>
                                    <div className='top'></div>
                                    <div className='middle'></div>
                                    <div className='bottom'></div>
                                </>
                            ) : (
                                <>
                                    <div className='top-sec'></div>
                                    <div></div>
                                    <div></div>
                                </>
                            )
                        }
                    </div>

                </div>

                <section className='buttons-welcome'>

                    <h1>Manuel</h1>
                    <h3>Professional Taxes Management</h3>

                    <div className='botones'>

                        <button className='btn-services'><h3>Services</h3></button>
                        <button className='btn-services'><h3>Contact</h3></button>

                    </div>

                </section>


                {
                    lines ?
                        (<>
                            <div className="close" onClick={() => setLines(!lines)}>
                            </div>
                        </>)
                        :
                        (<>
                            <div className="open"></div>
                        </>)
                }
                {
                    lines ? (
                        <>
                            <div className='dashboard'>
                                <div className='dashboard-header'>
                                    <img src={icon} alt="Logo" />
                                </div>
                                <div className='dashboard-container'>
                                    <ul>
                                        <Nav />
                                    </ul>
                                    <div className="contact-nav">
                                        <button type='button'>Contact</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='dashboard-opened' id='dashboard-close'>
                                <div className='dashboard-header'>
                                    <img src={icon} alt="Logo" />
                                </div>
                                <div className='dashboard-container'>
                                    <ul>
                                        <Nav />
                                    </ul>
                                    <div className="contact-nav">
                                        <button type='button'>Contact Now</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }


                <video src={videoBg} autoPlay loop muted />

            </section>

        </>
    )
}

export default Header