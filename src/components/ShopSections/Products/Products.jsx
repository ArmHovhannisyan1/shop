import { useEffect, useMemo, useRef, useState } from "react"
import Product from "./Product"
import Modal from "./Modal/Modal"
import CustomSelect from "../../CustomSelect/CustomSelect"
import ChangePrRow from "../../ChangePrRow/ChangePrRow"
import Filter from "../../Filter/Filter"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import allStyles from './Product.module.css'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CategoryItem from "../../Filter/CategoryItem"
import { setEmptyFilter, setPriceFilter, setRemoveFilter } from "../../../redux/filter/actions"
import FilterButton from "../../Filter/FilterButton"

export default function Products() {
    const [showModal, setShowModal] = useState(false)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [showProduct, setShowProduct] = useState(false)
    const [prRow, setPrRow] = useState(3)
    const [showFilter, setShowFilter] = useState(false);
    const [maxPrice, setMaxPrice] = useState()
    const [minPrice, setMinPrice] = useState()
    const dispatch = useDispatch();

    const filters = useSelector(state => state.filter.filters)
    // console.log(filters)
    const categoryFilter1 = useSelector(state => state.filter.categoryFilter1);
    // console.log(categoryFilter1)
    const searchFilter1 = useSelector(state => state.filter.searchFilter1)
    const searchFilter2 = useSelector(state => state.filter.searchFilter2)
    const priceFilter = useSelector(state => state.filter.priceFilter)
    const brandFilter = useSelector(state => state.filter.brandFilter)
    const colorFilter = useSelector(state => state.filter.colorFilter)
    // console.log(colorFilter)
    const categoryFilter2 = useSelector(state => state.filter.categoryFilter2)

    const filteredProducts = products.filter(product => {
        const categoryProduct1 = (categoryFilter1 === 'All categories' || product.category.includes(categoryFilter1));
        const searchProduct1 = product.title.replace(/\s/g, '').toLowerCase().includes(searchFilter1.trim().replace(/\s/g, '').toLowerCase());
        const searchProduct2 = product.title.replace(/\s/g, '').toLowerCase().includes(searchFilter2.trim().replace(/\s/g, '').toLowerCase());
        const priceProduct = product.price >= priceFilter[0] && product.price <= priceFilter[1]
        const brandProduct = !brandFilter.length || brandFilter.some(brand => {
            if (product.brand) {
                return product.brand.toLowerCase().includes(brand.toLowerCase());
            } else {
                return false;
            }
        });
        const colorProduct = !colorFilter.length || colorFilter.some(color => {
            if (product.color) {
                return product.color.toLowerCase().includes(color.toLowerCase());
            } else {
                return false;
            }
        });
        const categoryProduct2 = !categoryFilter2.length || categoryFilter2.some(category => {
            if (product.category) {
                return product.category.toLowerCase().includes(category.toLowerCase());
            } else {
                return false;
            }
        });
        return categoryProduct1 && searchProduct1 && searchProduct2 && priceProduct && brandProduct && colorProduct && categoryProduct2;
    });

    // console.log(categoryFilter2)

    const options = [
        { id: 1, value: 'Sort by: Default sorting' },
        { id: 2, value: 'Sort by: popularity' },
        { id: 3, value: 'Sort by: average rating' },
        { id: 4, value: 'Sort by: latest' },
        { id: 5, value: 'Sort by price: low to high' },
        { id: 6, value: 'Sort by price: high to low' },
    ]
    const [sortOption, setSortOption] = useState(options[0])
    const sortedProducts = useMemo(() => {
        switch (sortOption.id) {
            case 2: {
                return [...filteredProducts.sort()]
            }
            case 3: {
                return [...filteredProducts.sort()]
            }
            case 4: {
                return [...filteredProducts.sort()]
            }
            case 5: {
                return [...filteredProducts.sort((a, b) => a.price - b.price)]
            }
            case 6: {
                return [...filteredProducts.sort((a, b) => b.price - a.price)]
            }
            default: {
                return filteredProducts;
            }
        }
       
    }, [filteredProducts])

    const handleSortChange = (el) => {
        setSortOption(el)
    }

    useEffect(() => {
        setLoading(true)
        fetch('./products.json')
            .then(res => res.json())
            .then(res => {
                setProducts(res)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        if (products.length > 0) {
            const maxPriceProduct = Math.max(...products.map(el => el.price));
            const minPriceProduct = Math.min(...products.map(el => el.price));
            const defaultPrice = [minPriceProduct, maxPriceProduct];
            dispatch(setPriceFilter(priceFilter || defaultPrice));
            setMaxPrice(maxPriceProduct);
            setMinPrice(minPriceProduct);
        }
    }, [dispatch, products]);

    // console.log(filteredProducts)
    const Loading = () => {
        return (
            <>
                <div className={allStyles.skeletonWrapper + ' wrapper'}>
                    <Skeleton height={350} />
                </div>
                <div className={allStyles.skeletonWrapper + ' wrapper'}>
                    <Skeleton height={350} />
                </div>
                <div className={allStyles.skeletonWrapper + ' wrapper'}>
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    const showModalHandler = (el) => {
        setShowModal(true)
        setShowProduct(el)
        // document.body.classList.add('no-scroll')
    }

    const hideModalHandler = () => {
        setShowModal(false)
        // document.body.classList.remove('no-scroll')
    }

    const toggleFilter = () => {
        setShowFilter((prev) => !prev);
    };

    return (
        filteredProducts.length === 0 ?
            <section id="return-page-products">
                <div className='container'>
                    <div className={"row w50 m-center text-center f-column f-jCenter "}>
                        <div>
                            <h4>Nothing found after searching « {searchFilter1 || searchFilter2} » for the category « {categoryFilter1} »</h4>
                        </div>
                        <div>
                            <p>Try searching differently or shortening your query</p>
                        </div>
                        <div className="wrapper">
                            <div className="inner row">
                                {/* <CustomSelect options={options} onSortChange={handleSortChange} /> */}
                                <button className="btn" type="button" onClick={toggleFilter}>
                                    Filter +
                                </button>
                            </div>
                            {showFilter && <Filter
                                maxPrice={maxPrice}
                                showFilter={showFilter}
                                hide={() => setShowFilter(false)}
                            />}
                        </div>
                        <div>
                            {filters.length > 0 && <CategoryItem el={filters} />}
                        </div>
                    </div>
                </div>
            </section> :
            <section id="products">
                <div className="container m-center w100">
                    <div className="row f-jBetween">
                        <div className="wrapper">
                            <span>
                                Showing all {filteredProducts.length} results in <p>{categoryFilter1}</p> category
                                {filteredProducts.length > 0 && (searchFilter1 || searchFilter2) && (
                                    <p>{`for « ${searchFilter1 || searchFilter2} » `}</p>
                                )}
                            </span>
                        </div>
                        <div className="wrapper row">
                            <span className="views">Views:</span>
                            <ChangePrRow setPrRow={setPrRow} />
                        </div>
                        <div className="wrapper">
                            <div className="inner row">
                                <CustomSelect options={options} handleSortChange={handleSortChange} />
                                <button className="btn" type="button" onClick={toggleFilter}>
                                    <FilterButton />
                                </button>
                            </div>
                            {showFilter && <Filter minPrice={minPrice} maxPrice={maxPrice} showFilter={showFilter} hide={() => setShowFilter(false)} />}
                        </div>
                    </div>
                    <div>
                        {filters.length > 0 &&
                            <CategoryItem
                                onEmpty={() => dispatch(setEmptyFilter())}
                                onRemove={(category) => dispatch(setRemoveFilter(category))}
                                el={filters}
                            />}
                    </div>
                    <div className="row f-wrap f-jBetween">
                        {loading ? <Loading /> : sortedProducts.map((el) => (
                            <Product
                                key={el.id}
                                el={el}
                                showModalHandler={showModalHandler}
                                prRow={prRow}
                            />))}
                        {showModal && <Modal product={showProduct} hideModal={hideModalHandler} />}
                    </div>
                </div>
            </section>
    )
}