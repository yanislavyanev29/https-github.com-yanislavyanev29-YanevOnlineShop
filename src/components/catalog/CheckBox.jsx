 
import '../../styles/Products.css'
 const CheckBox = () => {


    return (

        <div>
        <div className="block-title">
            <h3>Brands</h3>
        </div>

        <ul className="block-content">
            <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">
                    <span>Nike</span>
                    <small>(10)</small>
                </label>
            </li>

            <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">
                    <span>Adidas</span>
                    <small>(7)</small>
                </label>
            </li>

            <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">
                    <span> Puma</span>
                    <small>(3)</small>
                </label>
            </li>

            <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">
                    <span>Vans</span>
                    <small>(3)</small>
                </label>
            </li>



            <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">
                    <span>Calvin Clain</span>
                    <small>(3)</small>
                </label>
            </li>

            <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">
                    <span>Moncler</span>
                    <small>(3)</small>
                </label>
            </li>

            <li>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">
                    <span>Givenchy</span>
                    <small>(3)</small>
                </label>
            </li>
        </ul>
    </div>

    )


        
    
 }

 export default CheckBox;