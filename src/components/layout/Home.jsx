import Announcement from "../HomePage/Announcement.jsx"
import Slider from "../HomePage/Slider.jsx"
import Categories from "../HomePage/Categories.jsx"
import Products from "../catalog/Products.jsx"
import Brands from "../HomePage/Brands.jsx"
import Newsletter from "../HomePage/Newsletter.jsx"
const Home = () => {

return (
   <div>
    <Announcement/>
    <Slider/>
    <Categories/>
    <div style={{padding: "30px"}}>
        <p style={{fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>
            Top Rated Products
        </p>

    </div>
    <Products/>
    <Newsletter/>
    <Brands/>

    </div>
)

}

export default Home;