import React from 'react'
import {connect} from 'react-redux'

import './Footer.scss'


const mapStateToProps = (state) => ({
    socialLinks: state.footer.socialLinks
})
const Footer = ({socialLinks}) => (
    <footer className="footer">
        <div className='footer__title'> Created by Nazarii Shvets</div>
        <div className='footer__links'>
            {socialLinks.map(link => (
                <a className='footer__links--link' key={link.id} href={link.url} target='_blank'
                   rel='noreferrer'>
                    <img src={link.logo} key={link.id} alt="" width='30px'
                         className='footer__links--img'/>
                </a>
            ))}
        </div>
    </footer>
)


export default connect(mapStateToProps, {})(Footer)