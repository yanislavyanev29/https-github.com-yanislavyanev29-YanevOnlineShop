
import '../../styles/Products.css'
const RadioButton = () => {



    return (


        <>
        <ul className="block-content">
                            <li>
                                <input type="radio" name="category" id="" />
                                <label htmlFor="">
                                    <span>Shoes</span>
                                    <small>(148)</small>
                                </label>
                            </li>

                            <li>
                                <input type="radio" name="category" id="" />
                                <label htmlFor="">
                                    <span>Clothings</span>
                                    <small>(33)</small>
                                </label>
                            </li>


                            <li>
                                <input type="radio" name="category" id="" />
                                <label htmlFor="">
                                    <span> Accessories</span>
                                    <small>(27)</small>
                                </label>
                            </li>


                        </ul>
        </>
    )
}

export default RadioButton;