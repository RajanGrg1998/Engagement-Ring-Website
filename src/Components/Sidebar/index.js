import React from 'react'
import whatsapp from '../../images/whatsapp.png'
import skype from '../../images/skype.png'
import gmail from '../../images/gmail.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'
import youtube from '../../images/youtube.png'
import instagram from '../../images/instagram.png'
import world from '../../images/world.png'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SocialIcon, SocialIconLink, Img} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to=''>Home</SidebarLink>    
                    <SidebarLink to=''>About Us</SidebarLink>    
                    <SidebarLink to=''>Services</SidebarLink>    
                    <SidebarLink to=''>Videos</SidebarLink>    
                    <SidebarLink to=''>Contact Us</SidebarLink>

                    <SocialIcon>
                        <SocialIconLink href='https://www.instagram.com/rohittgrg/' target='_blank' target='_blank' aria-label='World'>
                            <Img src={world} alt='World'/>
                        </SocialIconLink >
                        <SocialIconLink href='https://www.instagram.com/rohittgrg/' target='_blank' target='_blank' aria-label='Whatsapp'>
                            <Img src={whatsapp} alt='Whatsapp'/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/rohittgrg/' target='_blank' target='_blank' aria-label='Skype'>
                            <Img src={skype} alt='Skype'/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/rohittgrg/' target='_blank' target='_blank' aria-label='Gmail'>
                            <Img src={gmail} alt='Gmail'/>
                        </SocialIconLink>
                    </SocialIcon>    
                    <SocialIcon>
                        <SocialIconLink href='https://www.instagram.com/rohittgrg/' target='_blank' target='_blank' aria-label='Twitter'>
                            <Img src={twitter} alt='Twitter'/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/rohittgrg/' target='_blank' target='_blank' aria-label='Linkedin'>
                            <Img src={linkedin} alt='Linkedin'/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/rohittgrg/' target='_blank' target='_blank' aria-label='Youtube'>
                            <Img src={youtube} alt='Youtube'/>
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/rohittgrg/' target='_blank' target='_blank' aria-label='Instagram'>
                            <Img src={instagram} alt='Instagram'/>
                        </SocialIconLink>
                    </SocialIcon>    
                </SidebarMenu>    
            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
