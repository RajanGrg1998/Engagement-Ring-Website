import styled from "styled-components";
import { ImCross } from "@react-icons/all-files/im/ImCross";
import {Link} from 'react-scroll'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.5s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    position: absolute;
    top: 4rem;
    right: 1.5rem;
    background: transparent;
    font-size: 34px;
    cursor: pointer;
    outline: none;
`

export const CloseIcon = styled(ImCross)`
    color: #fff;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,100px);
    text-align: center;
    align-items: center;
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #FA5C38;
        transition: 0.2s ease-in-out;
    }
`;

export const SocialIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SocialIconLink = styled.a`
    color: #fff;
`

export const Img = styled.img`
    margin: 10px;
    padding: 0;
    height: 34px;
    width: 34px;
`
export const SocialRowList = styled.ul`
    display: list-item;
    justify-content: center;
    align-items: center;
    list-style: none;
    list-style-type: none;
    
`