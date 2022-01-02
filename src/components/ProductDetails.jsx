
import { useState } from "react";
import Carousel from './Carousel.js'

import '../styles/ProductDetails.css'

const ProductDetails = () => {

    const [isActiveProduct1, setActiveProduct1] = useState(true);
    const [isActiveProduct2, setActiveProduct2] = useState(false);
    const [isActiveProduct3, setActiveProduct3] = useState(false);
     const [isActiveProduct4, setActiveProduct4] = useState(false);
     const [isActiveProduct5, setActiveProduct5] = useState(false);
    const showProduct1 = () => {
        setActiveProduct2(false);
        setActiveProduct3(false);
        setActiveProduct4(false);
        setActiveProduct5(false);
        setActiveProduct1(true);
    
       
      };

      const showProduct2 = () => {
          setActiveProduct1(false);
          setActiveProduct3(false);
          setActiveProduct4(false);
          setActiveProduct5(false);
        setActiveProduct2(true);
    
       
      };

      const showProduct3 = () => {
        setActiveProduct1(false);
        setActiveProduct4(false);
      setActiveProduct2(false);
      setActiveProduct5(false);
      setActiveProduct3(true);
     
    };

    const showProduct4 = () => {
        setActiveProduct1(false);
        setActiveProduct5(false);
      setActiveProduct2(false);
      setActiveProduct3(false);
      setActiveProduct4(true);
    };

    const showProduct5 = () => {
        setActiveProduct1(false);
      setActiveProduct2(false);
      setActiveProduct3(false);
      setActiveProduct4(false);
      setActiveProduct5(true);
    };
    const product = {
        price: "340$",
        name: "NIKE AIR MAX 96 II",
        imgUrl: "https://static.footshop.com/598795-full_product/153091.jpg",
        imgUrl2: "https://static.footshop.com/598783/153091.jpg",
        imgUrl3: "https://static.footshop.com/598786/153091.jpg",
        imgUrl4: "https://static.footshop.com/598792/153091.jpg",
        imgUrl5: "https://static.footshop.com/598789/153091.jpg"
    };





    return (

        <div className="card-container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className={`tab-pane ${isActiveProduct1 ? "active" : ""  }`} id="pic-1"><img src="https://static.footshop.com/598795-full_product/153091.jpg" /></div>
						  
						</div>

                        <div className="preview-pic tab-content">
						  <div className={`tab-pane ${isActiveProduct2 ? "active" : ""}`} id="pic-2"><img src="https://static.footshop.com/598783/153091.jpg" /></div>
						  
						</div>

                        <div className="preview-pic tab-content">
						  <div className={`tab-pane ${isActiveProduct3 ? "active" : ""}`} id="pic-3"><img src="https://static.footshop.com/598786/153091.jpg" /></div>
						  
						</div>

                        <div className="preview-pic tab-content">
						  <div className={`tab-pane ${isActiveProduct4 ? "active" : ""}`} id="pic-4"><img src="https://static.footshop.com/598792/153091.jpg" /></div>
						  
						</div>

                        <div className="preview-pic tab-content">
						  <div className={`tab-pane ${isActiveProduct5 ? "active" : ""}`} id="pic-5"><img src="https://static.footshop.com/598789/153091.jpg" /></div>
						  
						</div>
						<ul className="preview-thumbnail nav nav-tabs">
						  <li className="active"><a data-target="#pic-1" data-toggle="tab"><img onClick={showProduct1} src="https://static.footshop.com/598795-full_product/153091.jpg" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img  onClick={showProduct2} src="https://static.footshop.com/598783/153091.jpg" /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img onClick={showProduct3}src="https://static.footshop.com/598786/153091.jpg" /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img onClick={showProduct4} src="https://static.footshop.com/598792/153091.jpg" /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img onClick={showProduct5}  src="https://static.footshop.com/598789/153091.jpg" /></a></li>
						</ul>
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">men's shoes fashion</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<span className="review-no">41 reviews</span>
						</div>
						<p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
						<h4 className="price">current price: <span>$180</span></h4>
						<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">s</span>
							<span className="size" data-toggle="tooltip" title="medium">m</span>
							<span className="size" data-toggle="tooltip" title="large">l</span>
							<span className="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						
						<div className="action">
							<button className="add-to-cart btn btn-default" type="button">add to cart</button>
							<button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>

    <div className="related-products">

      <p>Related Products</p>
    </div>
    <Carousel/>
	</div>



    )
}

export default ProductDetails;