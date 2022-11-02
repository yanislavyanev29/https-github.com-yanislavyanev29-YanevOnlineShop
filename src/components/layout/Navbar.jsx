import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useState } from "react";
import { mobile960,mobile795,mobile430 } from "../../responsive.js";
import { useSelector,useDispatch } from "react-redux";
import { useAppDispatch,useAppSelector } from "../../redux/configureStore.js";
import { clearBasket } from "../../redux/basketSlice.js";
import SignInMenu from "./SignInMenu.jsx";
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




const IconContainer = styled.div`
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
  

    const {basket} = useSelector(state => state.basket);
   const {user} = useSelector(state => state.account);
     
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity,0)
    const toggleActive = () => {
      setActive(!isActive);
  
     
    };
  
   

    return (

      <Html>
         <Header>

             <Span>Yanev Sport</Span>

             <Nav style={isActive ? {right: '0' } : {}}>
             <Link style={decorationNone} to="/"><Anchor >Home</Anchor></Link>
             <Link style={decorationNone} to="/categories"><Anchor>Categories</Anchor></Link>
             {user && user.roles?.includes('Admin') &&
                     <Link style={decorationNone} to="/inventory"><Anchor>Inventory</Anchor></Link>}
                {user? <SignInMenu/>
               :
                <Link style={decorationNone} to="/register"><Anchor>Register</Anchor></Link>}
              
              {user? null
               :
                <Link style={decorationNone} to="/login"><Anchor>Login</Anchor></Link>}
              
            


             </Nav>

             <IconContainer>

                   {user? <Span>Hello {user.email}</Span> : null} 
                 <Link to="/cart" > <SearchIcon className="fas fa-shopping-cart" id="cart-btn"><span style={ {fontSize: "22px"}}>{itemCount? itemCount : 0} </span></SearchIcon></Link>
                   <Bar className="fas fa-bars" id="menu-btn" onClick={toggleActive}></Bar>
             </IconContainer>

            

         </Header>
        </Html>
    )
}

export default Navbar;