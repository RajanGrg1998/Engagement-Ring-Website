import React from 'react'
import line from '../../images/aboutLine.svg'
import { CardWrapper, CardFront, CardBack, TextWrapper, Line, Header, Paragraph} from './AboutElements'

const About = () => {
    return (
        <CardWrapper>
            <CardFront>
                <TextWrapper>
                    <Header>
                        <Line src={line} alt='Line'/>ARE YOU A WINNER? 
                    </Header>
                    <Paragraph>Connect if our superlative approach to excellence in language services resonates with your profound awareness of what high quality means for advancing your growth, prestige, product, solution, revenue, return on investment, brand image, peace of mind, or project. We match if you seek the best for yourself, your business, your project, your product.
                    </Paragraph>
                </TextWrapper>
            </CardFront>
            <CardBack/>
        </CardWrapper>
    )
}

export default About
