import React from 'react'

import './Footer.scss'


const Footer = ({social}) => {
    return (
        <footer className="footer">
            <div className='footer__title'> Created by Nazarii Shvets</div>
            <div className='footer__links'>
                {social.map((site, idx) => {
                    return (
                        <a className='footer__links--link' href={site.url} target='_blank' rel='noreferrer'>
                            <img src={site.logo} key={idx} alt="" width='30px' className='footer__links--img'/>
                        </a>

                    )
                })}
            </div>
        </footer>
    )
}

export default Footer