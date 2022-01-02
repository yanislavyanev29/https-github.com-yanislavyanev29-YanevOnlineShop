import Products from '../HomePage/Products.jsx'
import '../styles/Products.css'


const CategoryPage = () => {



    return (

        <section className="section products">
            <div className="products-layout container">
                <div className="col-1-of-4">
                    <div>
                        <div className="block-title">
                            <h3>Category</h3>
                        </div>

                        <ul className="block-content">
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span>Shoes</span>
                                    <small>(148)</small>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span>Clothings</span>
                                    <small>(33)</small>
                                </label>
                            </li>
                            

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span> Accessories</span>
                                    <small>(27)</small>
                                </label>
                            </li>

                           
                        </ul>
                    </div>

                    <div>
                        <div className="block-title">
                            <h3>Brands</h3>
                        </div>

                        <ul className="block-content">
                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span>Nike</span>
                                    <small>(10)</small>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span>Adidas</span>
                                    <small>(7)</small>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span> Puma</span>
                                    <small>(3)</small>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span>Vans</span>
                                    <small>(3)</small>
                                </label>
                            </li>

                            

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span>Calvin Clain</span>
                                    <small>(3)</small>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span>Moncler</span>
                                    <small>(3)</small>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label for="">
                                    <span>Givenchy</span>
                                    <small>(3)</small>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-3-of-4">
                    <form action="">
                        <div className="item">
                            <label for="sort-by">Sort By</label>
                            <select name="sort-by" id="sort-by">
                                <option value="title" selected="selected">Name</option>
                                <option value="number">Price</option>
                              
                                <option value="created">Newness</option>
                            </select>
                        </div>
                        <div className="item">
                            <label for="order-by">Order</label>
                            <select name="order-by" id="sort-by">
                                <option value="ASC" selected="selected">ASC</option>
                                <option value="DESC">DESC</option>
                            </select>
                        </div>
                        <a href="">Apply</a>
                    </form>

                    <Products/>

                    <ul class="pagination">
          <span>1</span>
          <span>2</span>
          <span class="icon">››</span>
          <span class="last">Last »</span>
        </ul>
                </div>
            </div>
        </section>
    )
}

export default CategoryPage;