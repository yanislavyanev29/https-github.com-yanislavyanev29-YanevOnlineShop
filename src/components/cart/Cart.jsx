import styled from "styled-components";
import {Add,Remove} from "@material-ui/icons";
import Announcement from "../HomePage/Announcement.jsx";
import {mobile960, mobile795} from "../../responsive.js";
import { useDispatch,useSelector } from "react-redux";
import { addBasketItemAsync,removeBasketItemAsync } from "../../redux/basketSlice.js";
import { useNavigate } from "react-router-dom";


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

const {basket} = useSelector(state => state.basket);
const dispatch = useDispatch();
    
   const productsTotalPrice = basket?.items.reduce((sum,item) => sum + (item.quantity * item.price),0) ?? 0;

   const deliveryFree = productsTotalPrice > 300 ? 0 : 8;

   const total = productsTotalPrice + deliveryFree;

   let navigate = useNavigate(); 
   const handleClick = () =>{ 
     let path = '/checkout'; 
     navigate(path);
   }

       if(!basket) return <Title>The Basket is empty</Title>
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

                  <TopButton type ="filled" onClick={handleClick}>CHECKOUT NOW</TopButton>
              </Top>
               <Bottom>

                   <Info>
                       {basket.items.map(item => (
                        <>
                            <Product>
                           <ProductDetail>
                               <Image src= {item.imageUrl} alt="CartProductImage"/>
                               <Details>
                                    <ProductName>
                                        <b>Product:</b> {item.name}
                                    </ProductName>
                                     
                                     <ProductColor color="black"/>

                                     <ProductSize>
                                         <b>Size:</b> 43.5
                                     </ProductSize>
                               </Details>
                           </ProductDetail>
                            <PriceDetails>
                           <AmountContainer>
                               <Add style={{cursor: 'pointer'}} onClick={() => dispatch(addBasketItemAsync({productId: item.productId}))}/>
                               <Amount>{item.quantity}</Amount>
                               <Remove style={{cursor: 'pointer'}} onClick={() => dispatch(removeBasketItemAsync({productId: item.productId, quantity: 1}))}/>
                           </AmountContainer>
                           <Price>{item.price} $</Price>
                           </PriceDetails>
                       </Product>
                       <Hr />
                        
                        
                        </>




                       ))}
                      
                   </Info>
                   <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <Item>
                            <TextOfItem>Order Price</TextOfItem>
                            <PriceOfItem>{productsTotalPrice.toFixed(2)} $</PriceOfItem>
                        </Item>

                        <Item>
                            <TextOfItem> Shipping Price</TextOfItem>
                            <PriceOfItem>{deliveryFree.toFixed(2)} $</PriceOfItem>
                        </Item>
                         
                        <Item type="total">
                            <TextOfItem> Total </TextOfItem>
                            <PriceOfItem>{total.toFixed(2)} $</PriceOfItem>

                        </Item>
                        <Button>CHECKOUT NOW</Button>
                   </Summary>
               </Bottom>
                
            </Wrapper>

        
        </Container>


    )
}

export default Cart;