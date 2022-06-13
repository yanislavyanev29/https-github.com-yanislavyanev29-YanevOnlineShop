
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProductsAsync,productSelectors } from '../../redux/catalogSlice.js';
import '../../styles/Products.css'
import CategoryProduct from './CategoryProduct.jsx'

const CategoryPage = () => {

    const products = useSelector(productSelectors.selectAll)
    const {productsLoaded} = useSelector(state => state.catalog);
    const dispatch = useDispatch();
  
    useEffect(() => {
        if(!productsLoaded) dispatch(fetchProductsAsync());
       
    }, [dispatch, productsLoaded]);

// if(productStatus.includes('pending')) return <LoadingComponent message='Loading products...'/>

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
                                <label htmlFor="">
                                    <span>Shoes</span>
                                    <small>(148)</small>
                                </label>
                            </li>

                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">
                                    <span>Clothings</span>
                                    <small>(33)</small>
                                </label>
                            </li>


                            <li>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">
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
                </div>
                <div className="col-3-of-4">
                    <form action="">
                        <div className="item">
                            <label htmlFor="sort-by">Sort By</label>
                            <select className='item-select' name="sort-by" id="sort-by">
                                <option value="title" selected="selected">Name</option>
                                <option value="number">Price</option>

                                <option value="created">Newness</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="order-by">Order</label>
                            <select className='item-select' name="order-by" id="sort-by">
                                <option value="ASC" selected="selected">ASC</option>
                                <option value="DESC">DESC</option>
                            </select>
                        </div>
                        <a href="#">Apply</a>
                    </form>

                    <div className="product-layout">

                        {products.map(x => <CategoryProduct key={x.id} product={x} />)}
                    </div>

                    <ul className="pagination">
                        <span>1</span>
                        <span>2</span>
                        <span className="icon">››</span>
                        <span className="last">Last »</span>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CategoryPage;