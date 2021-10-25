import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRignt 
} from './HeroElements'
import Hexagon from '../../videos/Hexagon.mp4'

const HeroSection = () => {
    const [hover, setHover]= useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Hexagon} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>GMX</HeroH1>
                <HeroP>
                PC assembly to order, any kind of designs, order any components
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to='signup' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >
                        Get Started {hover ? <ArrowForward/> : <ArrowRignt/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
