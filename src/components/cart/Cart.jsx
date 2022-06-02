import styled from "styled-components";
import {Add,Remove} from "@material-ui/icons";

import Announcement from "../HomePage/Announcement.jsx";
import {mobile960, mobile795} from "../../responsive.js";


const Container = styled.div``;

const Wrapper = styled.div`
padding: 23px;
${mobile960({padding: "13px"})}
${mobile795({padding: "9px"})}

`;
const Title = styled.h1`

font-weight: 300;
text-align: center;
`;


const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding: 12px;
font-weight: 600;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
color: ${(props)=> props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
${mobile960({display: "none"})}
`;
const TopText = styled.span`
  
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.span`
display: flex;
justify-content: space-between;
${mobile960({flexDirection: "column"})}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  
display: flex;
justify-content: space-between;
${mobile960({flexDirection: "column"})}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
 padding: 23px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};

`;
const ProductSize = styled.span``;


const PriceDetails = styled.div`
flex:1;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const AmountContainer = styled.div`

display: flex;
align-items: center;
margin-bottom: 20px;
`;

const Amount = styled.div`
font-size: 24px;
margin: 5px;
${mobile960({margin: "5px 15px"})}
`;

const Price = styled.div`
font-size: 24px;
font-weight: 185;
${mobile960({marginBottom: "20px"})}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle = styled.h1`
font-weight: 200;
`;

const Item = styled.div`
margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const TextOfItem = styled.span`

`;


const PriceOfItem = styled.span``;

const Button = styled.button`
width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const Cart = () => {



    return (

        <Container>
         
            <Announcement />
            <Wrapper>
              <Title>YOUR BAG</Title>
              <Top>
                  <TopButton>CONTINUE SHOPPING</TopButton>
                  <TopTexts>
                     <TopText>Shopping Bag(2)</TopText>
                     <TopText>Your Wishlist (0)</TopText>

                  </TopTexts>

                  <TopButton type ="filled">CHECKOUT NOW</TopButton>
              </Top>
               <Bottom>

                   <Info>
                       <Product>
                           <ProductDetail>
                               <Image src= "https://static.footshop.com/417856/33407.jpg" alt="CartProductImage"/>
                               <Details>
                                    <ProductName>
                                        <b>Product:</b> NIKE AIR MAX 97
                                    </ProductName>
                                     <ProductId>
                                         <b>ID:</b> 7345893475349
                                     </ProductId>
                                     <ProductColor color="black"/>

                                     <ProductSize>
                                         <b>Size:</b> 43.5
                                     </ProductSize>
                               </Details>
                           </ProductDetail>
                            <PriceDetails>
                           <AmountContainer>
                               <Add/>
                               <Amount>2</Amount>
                               <Remove/>
                           </AmountContainer>
                           <Price>30 $</Price>
                           </PriceDetails>
                       </Product>
                       <Hr />
                       <Product>
                           <ProductDetail>
                               <Image src= "https://static.footshop.com/481774/52668.jpg"  alt="CartProductImage"/>
                               <Details>
                                    <ProductName>
                                        <b>Product:</b> NIKE SPORTSWEAR ESSENTIAL HOODIE
                                    </ProductName>
                                     <ProductId>
                                         <b>ID:</b> 445893475349
                                     </ProductId>
                                     <ProductColor color="black"/>

                                     <ProductSize>
                                         <b>Size:</b> XS S M L
                                     </ProductSize>
                               </Details>
                           </ProductDetail>
                            <PriceDetails>
                           <AmountContainer>
                               <Add/>
                               <Amount>1</Amount>
                               <Remove/>
                           </AmountContainer>
                           <Price>50 $</Price>
                           </PriceDetails>
                       </Product>
                   </Info>
                   <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <Item>
                            <TextOfItem>Estimated Shipping</TextOfItem>
                            <PriceOfItem>7.00 $</PriceOfItem>
                        </Item>

                        <Item>
                            <TextOfItem> Shipping Discount</TextOfItem>
                            <PriceOfItem>-5.00 $</PriceOfItem>
                        </Item>
                         
                        <Item type="total">
                            <TextOfItem> Total </TextOfItem>
                            <PriceOfItem>12.00 $</PriceOfItem>

                        </Item>
                        <Button>CHECKOUT NOW</Button>
                   </Summary>
               </Bottom>
                
            </Wrapper>

        
        </Container>


    )
}

export default Cart;