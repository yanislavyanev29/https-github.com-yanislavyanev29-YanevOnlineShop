import Announcement from "./Announcement.jsx"
import Slider from "./Slider.jsx"
import Categories from "./Categories.jsx"
import Products from "./Products.jsx"
import Brands from "./Brands.jsx"
import Newsletter from "./Newsletter.jsx"
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