
import React from 'react'
import agent from "../api/agent.js";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { mobile430,mobile795 } from "../../responsive.js";
import { Carousel } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from '../layout/Carousel.js';
import NotFound from '../errors/NotFound.jsx'
import LoadingComponent from '../layout/LoadingComponent.jsx';




const Container = styled.div`
  margin: 4rem 2rem;
  `;

const Wrapper = styled.div`
  padding: 90px;
  display:flex;
  ${mobile430({ padding: "10px", flexDirection: "column" })}
  ${mobile795({ padding: "10px", flexDirection: "column" })}
  `;

const ImgContainer = styled.div`
  width: 300px;
  flex:1;
  `;


const Image = styled.img`
 
  width: 90%
  height: 80vh;
  object-fit: cover;
  ${mobile430({ height: "40vh" })}
  ${mobile795({ height: "50vh" })}
  `;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile430({ padding: "10px" })}
  ${mobile795({ padding: "25px" })}
`;

const Title = styled.h1`
  font-weight: 240;
`;

const Description = styled.p`
font-size: 20px;
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 50px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile430({ width: "100%" })}
  ${mobile795({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile430({ width: "100%" })}
  ${mobile795({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});

  const images = Object.entries(product).filter(x => x[0].includes('imageUrl')).map(x => x[1])
  console.log(images)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      agent.Catalog.details(parseInt(id))
          .then(response => setProduct(response))
          .catch(error => console.log(error))
          .finally(() => setLoading(false))
  }, [id]);

  if (loading) return <LoadingComponent message='Loading product...' />

  if (!product) return <NotFound />



  return (


    <Container>

      <Wrapper>
        <ImgContainer>

          <Carousel fade style={{width: '90%'}}>



            {images.map(img => (



              <Carousel.Item >
                <Image
                  className="d-flex w-100"
                  src={img}

                />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>


            ))}





          </Carousel>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Description>
            {product.description}
          </Description>
          <Price>Price: {product.price}$</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Sizes: </FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>{product.quantityInStock}</Amount>
              <Add />
            </AmountContainer>
            <Button variant="contained" color="primary">Add to cart </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <hr />



      <div className="related-products">

        <p >Related Products</p>
      </div>
      <RelatedProducts />
    </Container>

  )
}

export default ProductDetails;