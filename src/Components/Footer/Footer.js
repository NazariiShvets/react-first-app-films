import React from 'react'

import './Footer.scss'

const Footer = ({socialLinks}) => {
    return (
        <footer className="footer">
            <div className='footer__title'> Created by Nazarii Shvets</div>
            <div className='footer__links'>
                {socialLinks.map((link, idx) => {
                    return (
                        <a className='footer__links--link' key={idx} href={link.url} target='_blank' rel='noreferrer'>
                            <img src={link.logo} key={idx} alt="" width='30px' className='footer__links--img'/>
                        </a>
                    )
                })}
            </div>
        </footer>
    )
}

export default Footer