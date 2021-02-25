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
  @media(max-width: 768px){
    margin-right: 15px;
  }
`

export const MobilMenu = styled.div`
  display: none;
  @media(max-width: 768px){
    display: inline-block;
    .menu-icon {
    width: 45px;
    height: 45px;
    }
  }
`

export const NavItems = styled.ul`
  padding: 0px;
  @media (max-width: 768px) {
    background-color: #fff;
    display: flex;
    width: 100%;
    height: 350px;
    position: absolute;
    top: 83px;
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
  @media (max-width: 768px) {
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

export const H3 = styled.h3`
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
    ${props => props.rows && css`
      width:100%;
      @media(min-width: 768px){
        width: 70%;
        margin: auto;
        margin-bottom: 50px;
      }
      @media(min-width: 992px){
        width: 60%;
        margin-bottom: 75px;
      }
    `}

    ${props => props.ellipsis && css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 6; /* number of lines to show */
      -webkit-box-orient: vertical;
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
  border: 2px solid rgba(0,0,0,0);
  padding: 16px 50px;
  margin-top:20px;
  &:hover{   
    color: var(--page-color);
    background-color: white;
    border: 2px solid var(--page-color);
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
  font-size: 15px;
`

export const Card = styled.div`
  box-shadow: 0px 5px 80px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 40px 70px;
  margin-bottom: 40px;
  border-bottom: 4px solid transparent;

  &:hover{
    border-bottom: 4px solid var(--page-color);
    cursor: pointer;
  }
`

export const CardTitle = styled.h3`
  font-weight: 500;
  font-size: 23px;
  line-height: 147%;
  text-transform: capitalize;
  color: var(--writer-color);
`

export const CardParagraph = styled.p`
  font-size: 13px;
  line-height: 185%;
  text-align: center;
  text-transform: capitalize;
  color: var(--paragraf-color);
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
`

export const CardLi = styled.li`
  text-decoration: none;
  margin-bottom: 50px;
  position: relative;
  list-style-type: none;
  @media(min-width: 768px){   
    display: flex;
    &:nth-of-type(even){
      display: -webkit-box;
      display: -ms-flexbox;  
      -webkit-box-orient: horizontal;
      -webkit-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }
  }
`

export const PreveCard = styled.div`
  position: relative;
  text-align: center;
  margin-top: 50px 0px;

  @media(min-width: 768px){
    text-align: left;

  }

  @media(min-width: 992px){
    margin-left: 75px;
    margin-top: 100px;
  }
`

export const Circle = styled.span`
  font-weight: bold;
  font-size: 35px;
  line-height: 145%;
  color: var(--page-color);
  border-radius: 50%;
  padding: 5px 10px;
  background-color: rgba(250, 86, 82, 0.15);
  @media(min-width: 768px){
    position: absolute;
    top: 0px;
    left: -90px;
  } 
`

export const ExchangeCard = styled.div`
  background: linear-gradient(360deg, #FFFBFB -79.45%, #FDFDFD 105.35%);
  box-shadow: 0px 7px 95px rgba(243, 95, 95, 0.07);
  border-radius: 0px;
  padding: 20px;
`

export const Countries = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding: 5px 20px;
  cursor: pointer;
  p{
      color: var(--writer-color);
      font-weight: 700;
      margin: 0px 10px;
      display: inline-block;
  }

  span{
    color: var(--writer-color);
      font-weight: 700;
      margin: auto 10px;
  }

  &:hover{
      box-shadow: 0px 0px 14px rgba(250, 86, 82, 2);
  }

  .right{
    padding-top: 5px;
  }
`