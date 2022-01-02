
import styled from "styled-components";
import { categories } from "../data.js";
import {mobile960} from "../responsive.js"
import CategorySection from "./CategorySection.jsx";

const Container = styled.div`
display: flex;
padding: 40px;
justify-content: space-between;
${mobile960({padding: "0px" , flexDirection: "column"})}

`
const Categories = () => {


    return (
        
        <Container>

           {categories.map((item) => (
               <CategorySection item={item} key={item.id}/>
             ))}
        </Container>

    );
};
export default Categories;