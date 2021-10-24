import styled from "styled-components";

export const CardWrapper = styled.div`
    height: 320px;
    width: 764px;
    position: relative;
`

export const CardFront = styled.div`
    height: 296px;
    width: 734px;
    border-radius: 10px;
    background: #202020;
    position: absolute;
    z-index: 10;
`

export const CardBack = styled.div`
    border-radius: 10px;
    height: 293px;
    width: 743px;
    top: 27px;
    left: 21px;
    background: -webkit-linear-gradient(315deg, #202020, #FF9B2B);
    position: absolute;
`

export const TextWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 45px 40px;
    color: #F6F6F6;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Line = styled.img`
    width: 39px;
    margin-right: 16px;
`

export const Header = styled.h1`
    font-size: 36px;
    font-weight: 500;
`

export const Paragraph = styled.p`
    font-size: 17px;
    font-weight: 400;
`

