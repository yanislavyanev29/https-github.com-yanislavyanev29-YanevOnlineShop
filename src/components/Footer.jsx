
import '../styles/footer.css'
const Footer = () => {


    return (

        <footer id="footer" className="section footer">
       <div className="container">
      <div className="footer-container">
        <div className="footer-center">
          <h3>EXTRAS</h3>
          <a href="#">Brands</a>
          <a href="#">Gift Certificates</a>
          <a href="#">Affiliate</a>
          <a href="#">Specials</a>
          <a href="#">Site Map</a>
        </div>
        <div className="footer-center">
          <h3>INFORMATION</h3>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms  Conditions</a>
          <a href="#">Contact Us</a>
          <a href="#">Site Map</a>
        </div>
        <div className="footer-center">
          <h3>MY ACCOUNT</h3>
          <a href="#">My Account</a>
          <a href="#">Order History</a>
          <a href="#">Wish List</a>
          <a href="#">Newsletter</a>
          <a href="#">Returns</a>
        </div>
        <div className="footer-center">
          <h3>CONTACT US</h3>
          <div>
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            42 Dream House, Dreammy street, 7131 Dreamville, USA
          </div>
          <div>
            <span>
              <i className="far fa-envelope"></i>
            </span>
            yanislav00@gmail.com
          </div>
          <div>
            <span>
              <i className="fas fa-phone"></i>
            </span>
            456-456-4512
          </div>
          <div className="payment-methods">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEsYu7vBewAY2F5sTcbbveaTWfn7-VrQveQ&usqp=CAU" alt="payment method"/>
          </div>
        </div>
      </div>
    </div>
    </footer>
    

    );
}

export default Footer;