


import styled from "styled-components";
import { mobile960 } from "../../responsive";

const Container = styled.div`
flex: 1;
margin: 12px;
height: 85vh;
transition: transform .2s;
position: relative;
&:hover{
  cursor: pointer;
  transform: scale(1.1);
}
`;

const Image = styled.img`
width: 100%;
height: 100%;

object-fit: cover;

${mobile960({ height: "37vh" })}

`;

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Title = styled.h1`
  color:white;
  margin-bottom: 20px;
`;

const Button = styled.button`
 
  padding: 10px;
  background-color: white;
  border-radius: 40px;
  color:gray;
  cursor: pointer;
  font-weight: 600;
  &:hover{
    background-color: gray;
    color: white;
  }
`;
const CategorySection = ({item}) => {
 

    return(

       <Container>
            <Image src={item.img}/>
                <Info>
                  <Title>{item.title}</Title>
                  <Button>Shop now</Button>

                </Info>
           
        
       </Container>
    )
}
export default CategorySection;