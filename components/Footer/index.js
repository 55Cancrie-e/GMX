import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
       <FooterContainer>
           <FooterWrap>
               <FooterLinksContainer>
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to='/signin'>How it works</FooterLink>
                               <FooterLink to='/signin'>Testimonials</FooterLink>
                               <FooterLink to='/signin'>Careers</FooterLink>
                               <FooterLink to='/signin'>Terms of Services</FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to='/signin'>How it works</FooterLink>
                               <FooterLink to='/signin'>Testimonials</FooterLink>
                               <FooterLink to='/signin'>Careers</FooterLink>
                               <FooterLink to='/signin'>Terms of Services</FooterLink>
                       </FooterLinkItems>
                   </FooterLinksWrapper>
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to='/signin'>How it works</FooterLink>
                               <FooterLink to='/signin'>Testimonials</FooterLink>
                               <FooterLink to='/signin'>Careers</FooterLink>
                               <FooterLink to='/signin'>Terms of Services</FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                               <FooterLink to='/signin'>How it works</FooterLink>
                               <FooterLink to='/signin'>Testimonials</FooterLink>
                               <FooterLink to='/signin'>Careers</FooterLink>
                               <FooterLink to='/signin'>Terms of Services</FooterLink>
                       </FooterLinkItems>
                   </FooterLinksWrapper>
               </FooterLinksContainer>
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to='/' onClick={toggleHome}>
                            GMX
                       </SocialLogo>
                       <WebsiteRights>GMX © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                       <SocialIcons>
                           <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                               <FaFacebook/>
                           </SocialIconLink>
                           <SocialIconLink href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
                               <FaInstagram/>
                           </SocialIconLink>
                           <SocialIconLink href="https://www.youtube.com/" target="_blank" aria-label="Youtube">
                               <FaYoutube/>
                           </SocialIconLink>
                           <SocialIconLink href="https://twitter.com/" target="_blank" aria-label="Twitter">
                               <FaTwitter/>
                           </SocialIconLink>
                       </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
           </FooterWrap>
       </FooterContainer>
    )
}

export default Footer
