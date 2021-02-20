import styled, {css} from 'styled-components';
import { NavLink } from "react-router-dom"


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
@media (min-width: 1200px) {
    width: 1170px;
  }
`
export const HeaderFixed = styled.header`
    padding-top: 20px;
    z-index:1;
    position: fixed;
    width: 100%;
    border-bottom-color: rgba(0, 0, 0, 0.2);
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px;
    background-color: #fff;
`

export const Button = styled.a`
  text-decoration: none;
  line-height: 1.5;
  text-align: center;
  background: white;
  border-radius: 65px;
  border: 2px solid var(--page-color);
  color: var(--page-color);
  display: inline-block;
  font-size: 20px;
  line-height: 30px;
  padding: 13px 32px;
  cursor: pointer;
  transition: .5s;
  font-weight: 700;

  &:hover{
    text-decoration: none;
    background-color: var(--page-color);
    color: white;
  }

  ${props => props.overview && css`
    background-color: var(--page-color);
    color: white;
    border: none;
    &:hover{   
      color: var(--page-color);
      background-color: var(--background-color);
    }
  `}

  ${props => props.light && css`
      background: var(--background-color);
      border: none;
      font-weight: 600;
      &:hover{
        background: rgba(250, 86, 82, 1);
        color: white;
      } 
  `}

`

export const Brand = styled.a`
    cursor: pointer;
    text-decoration: none !important;
    span{margin: auto;
    color: var(--writer-color);
    font-weight: 700;
    margin-left: 13px;
    text-decoration: none;
    }
`

export const NavLinks = styled(NavLink)`
  margin-right: 20px;
  text-decoration: none !important;
  color: var(--writer-color);
  &:hover{
    color: #FF383D;
  }
  @media(max-width: 770px){
    margin-right: 15px;
  }
`

export const MobilMenu = styled.div`
  display: none;

  @media(max-width: 770px){
    display: inline-block;

    .menu-icon {
    width: 45px;
    height: 45px;
    }
  }
`

export const NavItems = styled.ul`
  padding: 0px;
  @media (max-width: 770px) {
    background-color: #fff;
    display: flex;
    width: 100%;
    height: 350px;
    position: absolute;
    top: 100px;
    left: -100%;
    opacity: 0;
    transition: all 0.5s ease;
    flex-direction: column;
    list-style-type: none;
    grid-gap: 0px;
} 

`

export const NavItem = styled.li`
  display: inline;
  @media (max-width: 770px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vw;
    padding: 30px 0px;
  }
`

export const Title = styled.span`
    font-size: var(--alert-size);
    font-weight: 700;
    line-height: var(--alert-height);
    color: var(--page-color);

    ${props => props.small && css`
    font-size: var(--alert2-size);
    `}
`

export const H1 = styled.h1`
    font-size: var(--title-size);
    line-height: 50px;
    font-weight: 700;
    color: var(--writer-color);
    margin-bottom: 15px;
    margin-top: 15px;
`
export const H2 = styled.h2`
    font-size: var(--title2-size);
    line-height: 50px;
    font-weight: 700;
    color: var(--writer-color);
    margin-bottom: 10px;
    margin-top: 10px;
`

export const P = styled.p`
    color: var(--paragraf-color);
    font-size: var(--paragraph-size);
    line-height: 190%;
    font-weight: 400;
    margin-bottom: 20px;
    ${props => props.small && css`
    font-size: var(--paragraph2-size);
    line-height: 215%;
    `}
`

const Images = ({ alt, src, ...rest}) => {
  return <img src={src} {...rest} alt={alt}/>
}

export const Image = styled(Images)`
  margin-top: 35px;
  
  
  ${props => props.overview && css`
    position: absolute;
    left: -110px;
    width: 130%;
    margin-top: 0px;  
    @media(max-width: 992px){
      position: relative;
      width:100%;
      left: 0px;
    }
  `}
  ${props => props.about && css`
    position: absolute;
    left: -150px;
    width: 130%;
    margin-top: 0px;  
    @media(max-width: 992px){
      position: relative;
      width:100%;
      left: 0px;
    }
  `}

`

export const OverviewBlog = styled.div`
  margin-top: 200px;
  ${props => props.m0 && css`
    margin-bottom: 0px !important;

  `}

  @media(max-width: 1200px){
    margin-top: 100px;
    margin-bottom: 50px;
  }

  @media(max-width: 992px){
    margin-top: 0px;
    text-align: center;
  }
`

export const ContactSty = styled.div`
  text-align: center;
  margin-top: 150px;

  @media(max-width: 992px){
    margin-top:0px;
  }
`
export const Input = styled.input`
  background: #FFFFFF;
  box-shadow: 0px 8px 80px rgba(0, 0, 0, 0.06);
  border-radius: 57px;
  width: 80%;
  padding: 25px 25px;
  margin: auto;
  width: 100%;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0);
  color: #758681;
  &:focus{
      box-shadow: 0px 0px 14px rgba(250, 86, 82, 2);
  }

  @media(min-width: 768px){
    position: relative;  
    padding: 25px 165px 25px 25px !important;
  }

`

export const Form = styled.form`
  position: relative;
  text-align: center;
  margin: 30px auto;
  @media(min-width: 768px){
    width: 60%;
  }
`

export const SendButton = styled(Button)`
  background-color: var(--page-color);
  color: white;
  border: none;
  padding: 18px 50px;
  margin-top:20px;
  &:hover{   
    color: var(--page-color);
    background-color: var(--background-color);
  }
  @media(min-width: 768px){
    display: inline;
    position: absolute;
    right: 10px;
    bottom: 5px;
  }

  /* @media(min-width: 1200px){
  right: 290px !important;

  }
  @media (min-width: 992px) {
    position: absolute;
    right: 245px;
    bottom: 10px;
  } */
`

export const Flex = styled.div`

  display: block;
    text-align: center;
    margin: auto;
    margin-top: 40px;
  @media(min-width: 992px){
    display: flex;
  justify-content: space-between;
  margin-top: 80px;
  }
`

export const Social = styled.div`
  padding-top: 20px;

  svg{
    color: var(--writer-color);
    font-size: 27px;
    margin-left: 15px;
    transition: .2s;
    &:hover{
      color: var(--page-color);
    }
  }

`

export const FooterP = styled.p`
  margin: 50px auto 10px;
  color: var(--paragraf-color);
  font-size: var(--paragraph-size);
`