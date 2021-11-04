import React, {useState, useEffect} from 'react'
import home from '../../images/home.png'
import homeScroll from '../../images/homeScroll.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { HomeContainer, HomeWrapper, HomeImage, ContentWrapper, ScrollImageLink, ScrollImage} from './HomeElements'


const Home = () => {
    const [width, setWidth]   = useState(window.innerWidth);
    const [off, setOff] = useState();

    const mainFunction = () => {
        if (width < 751) {
            setOff(-50);
        }
        else if(width > 750){
            setOff(-116)
        }
    }

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        mainFunction();
    };

    useEffect(() => {
        mainFunction();
        window.addEventListener("resize", updateWidthAndHeight);
        return () => {
            window.removeEventListener("resize", updateWidthAndHeight);
        }
    });

    return (
        <HomeContainer id='home'>
            <HomeWrapper>
                <HomeImage src={home} alt='Home'/>

                <ContentWrapper>
                    <Slide top><h1>ARE<br/>YOU A<br/>WINNER?</h1></Slide>
                    <Fade top>
                        <ScrollImageLink activeClass='active' to="about" offset={off} exact='true'>
                            <ScrollImage src={homeScroll} alt='Home Scroll'/>
                        </ScrollImageLink>
                    </Fade>
                </ContentWrapper>

            </HomeWrapper>
        </HomeContainer>
    )
}

export default Home
