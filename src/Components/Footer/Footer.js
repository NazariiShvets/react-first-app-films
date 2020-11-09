import React from 'react'

import git from '../../img/github-logo.svg'
import inst from '../../img/instagram.svg'
import gmail from '../../img/gmail.svg'
import linked from '../../img/linkedin.svg'
import teleg from '../../img/telegram.svg'

import './Footer.scss'


const Footer = () => {

    const social = [{
        logo: git,
        url: 'https://github.com/NazariiShvets',
        id: 1
    }, {
        logo: inst,
        url: 'https://www.instagram.com/nazar.shvets666/',
        id: 2
    }, {
        logo: gmail,
        url: 'https://mail.google.com/mail/?view=cm&source=mailto&to=nazarii.shvets@gmail.com',
        id: 3
    }, {
        logo: linked,
        url: 'https://www.linkedin.com/in/nazar-shvets-3296041bb/',
        id: 4
    }, {
        logo: teleg,
        url: 'https://t.me/Divine666',
        id: 5
    },
    ]

    return (
        <footer className="footer">
            <div className='footer__title'> Created by Nazarii Shvets</div>
            <div className='footer__links'>
                {social.map((site, idx) => {
                    return (
                        <a className='footer__links--link'   href={site.url} target='_blank' rel='noreferrer'>
                            <img src={site.logo} key={idx} alt="" width='30px' className='footer__links--img'/>
                        </a>

                    )
                })}
            </div>
        </footer>
    )
}

export default Footer