import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile795 } from "../../responsive";
import {signOut} from "../../redux/accountSlice";
import { clearBasket } from "../../redux/basketSlice";
import { useSelector,useDispatch } from "react-redux";

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
const decorationNone ={
    textDecoration : "none"
  }


  const SignInMenu = () => {

const dispatch = useDispatch();
const navigate = useNavigate();
const {user} = useSelector(state => state.account)
    return (
  <>
     <Link style={decorationNone} to="/orders"><Anchor>My Orders</Anchor></Link>
     <Anchor onClick={() => {
                dispatch(signOut());
                dispatch(clearBasket());
                navigate('/')
            }}>Logout</Anchor>
  </>
    )
  }

  export default SignInMenu;