import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useAppSelector } from "../../redux/configureStore.js";
import { useState } from "react";
import { mobile960,mobile795,mobile430 } from "../../responsive.js";
const Html = styled.div`font-family: 'Roboto', sans-serif;
margin:0; padding-bottom:0px;
box-sizing: border-box;
border:none;
text-decoration: none;
text-transform: capitalize;
transition: .2s linear;
font-size: 48.5%;
overflow-x: hidden;
scroll-padding-top: 9rem;
scroll-behavior: smooth;
::-webkit-scrollbar{
  width: .8rem;
}
::-webkit-scrollbar-track{
  background: transparent;
}
::-webkit-scrollbar-thumb{
  background: #fff;
  border-radius: 5rem;
}
${mobile430({fontSize: "50%"})}
`
const Header = styled.div`
    background: #010103;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:1rem 5%;
    border-bottom: .1rem solid rgba(255,255,255,.3);
    position: fixed;
    top:0; left: 0; right: 0;
    z-index: 1000;
    ${mobile960({ padding: "1.5rem 2.rem" })}
`
const Span = styled.span`
   font-family: 'Bebas Neue', cursive;
   color : white;
  font-size: 25px;
`
const Nav = styled.nav`
      ${mobile795({display: "inline-block",
         position: "absolute",
        top: "90%",right: "-100%",
        background: "lightgray",
        width: "20rem",
        height: "calc(100vh - 9.5rem)",
        "&:hover":{
          color: "white",
          backgroundColor: "#010103"}})}
`
const Anchor = styled.a`
    margin:0 1rem;
    font-size: 1.3rem;
    text-decoration: none;
    color:#fff;
    cursor: pointer;
    &:hover {
    color:#d3ad7f;
    border-bottom: .1rem solid #d3ad7f;;
    padding-bottom: .5rem;
    }
    ${mobile795({color:"#13131a",
      display:"block",
      margin: "1.3rem",
      padding: ".5rem",
      fontSize:"2rem"})}
`

const SearchIcon = styled.div`
     color:#fff;
    cursor: pointer;
    font-size: 2rem;
    margin-left: 2rem;
    &:hover{
        color: #d3ad7f;
    }
`

const InputStyle = {
    height: '100%',
    width: '100%',
    fontSize: '1.6rem',
    borderRadius: '50px',
    border: '0',
    outline: '0',
    color: '#13131a',
    padding: '1rem',
    textTransform: 'none'
}

const LabelStyle = {
    cursor: 'pointer',
    fontSize: '2.2rem',
    marginRight: '1.5rem',
    color:'#13131a',
    "&:hover": {
    color:"#d3ad7f"
 
    }
}
const IconContainer = styled.div`
`

const SearchForm = styled.div`
    position: absolute;
    top:115%; right: 7%;
    background: #fff;
    width: 35rem;
    height: 3rem;
    display: flex;
    align-items: center;
    border-radius: 50px;
    border: 2px solid black;
    align-items: center;
    transform: scaleY(0);
    transform-origin: top;
`
const Bar = styled.div`
  display: none;
  color:#fff;
  cursor: pointer;
  font-size: 2rem;
  margin-left: 2rem;
  &:hover{
      color: #d3ad7f;
  }
  ${mobile795({display: "inline-block"})}
`

const decorationNone ={
  textDecoration : "none"
}
const Navbar = () => {
    const [isActive, setActive] = useState(false);
    const [isActiveSearch, setActiveSearch] = useState(false);

    const {basket} = useAppSelector(state => state.basket);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity,0)
     
    const toggleActive = () => {
      setActive(!isActive);
  
     
    };
  
    const toggleSearch = () => {
      setActiveSearch(!isActiveSearch);
    };

    return (

      <Html>
         <Header>

             <Span>Yanev Sport</Span>

             <Nav style={isActive ? {right: '0' } : {}}>
             <Link style={decorationNone} to="/"><Anchor >Home</Anchor></Link>
             <Link style={decorationNone} to="/categories"><Anchor>Categories</Anchor></Link>
             <Link style={decorationNone} to="/"> <Anchor>Mens</Anchor></Link>
             <Link style={decorationNone} to="/"> <Anchor>Womens</Anchor></Link>
             <Link style={decorationNone} to="/">  <Anchor>Kids</Anchor></Link>
             <Link style={decorationNone} to="/register"><Anchor>Register</Anchor></Link>
             <Link style={decorationNone} to="/login"> <Anchor>Login</Anchor></Link>


             </Nav>

             <IconContainer>

                   <SearchIcon className="fas fa-search" onClick={toggleSearch} id="search-btn"></SearchIcon>
                 <Link to="/cart" > <SearchIcon className="fas fa-shopping-cart" id="cart-btn"><span style={ {fontSize: "22px"}}>{itemCount? itemCount : 0} </span></SearchIcon></Link>
                   <Bar className="fas fa-bars" id="menu-btn" onClick={toggleActive}></Bar>
             </IconContainer>

              <SearchForm style= {isActiveSearch ? {transform: 'scaleY(1)'} : {}}>
              <input style={InputStyle} type="search" id="search-box" placeholder="search here..." />
              <label  style={LabelStyle} htmlFor="search-box" className="fas fa-search"></label>
              </SearchForm>

         </Header>
        </Html>
    )
}

export default Navbar;