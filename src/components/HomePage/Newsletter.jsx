
import styled from "styled-components";
import { mobile960 } from "../../responsive.js";

const NewsContainer = styled.div`
  height: 50vh;
  padding: 60px;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

const Title = styled.h1`
font-size: 40px;
margin-bottom: 15px;

`

const Description = styled.div`
font-size: 35px;
font-weight: 270;
margin-bottom: 20px;
${mobile960({textAlign: "Center"})}
`

const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile960({width: "80%"})}

`

const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`

const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
`

const Newsletter = () => {

    return (

        <NewsContainer>
          <Title>Newsletter</Title>
          <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
            <Input placeholder="Your email" />
            <Button>Send</Button>
            </InputContainer>


        </NewsContainer>
    )
}

export default Newsletter;