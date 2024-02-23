import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchFilter2 } from "../../redux/filter/actions";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function HeaderSearch(
    {
        searchActive,
        headerSearch,
        handleCategoryClick,
        handleRemoveSearchActive,
        handlePageScroll,
        handleFormSubmit,
    }) {
    const searchRef2 = useRef();
    const dispatch2 = useDispatch();
    const searchFilter2 = useSelector(state => state.filter.searchFilter2);

    const handleSearchChange2 = () => {
        const searchValue = searchRef2.current.value
        dispatch2(setSearchFilter2(searchValue))
    }
    const handleClearSearch2 = () => {
        const searchValue2 = searchRef2.current.value = ''
        dispatch2(setSearchFilter2(searchValue2))
    }
    return (
        <div className={`header-search ${searchActive ? 'searchOpen' : 'searchClose'}`} ref={headerSearch}>
            <div className="container h100">
                <div className="row f-aCenter f-jCenter f-column rel w70 m-center hInherit">
                    <h3>Searching</h3>
                    <ul className='row'>
                        <li onClick={() => {
                            handleCategoryClick('All categories');
                            handleRemoveSearchActive();
                            handlePageScroll();
                        }}><Link to='/shop'>All categories</Link></li>
                        <li onClick={() => {
                            handleCategoryClick('Bedroom');
                            handleRemoveSearchActive();
                            handlePageScroll();
                        }}><Link to='/shop'>Bedroom</Link></li>
                        <li onClick={() => {
                            handleCategoryClick('Decor');
                            handleRemoveSearchActive();
                            handlePageScroll();
                        }}><Link to='/shop'>Decor</Link></li>
                        <li onClick={() => {
                            handleCategoryClick('Outdoor');
                            handleRemoveSearchActive();
                            handlePageScroll();
                        }}><Link to='/shop'>Outdoor</Link></li>
                        <li onClick={() => {
                            handleCategoryClick('Kitchen');
                            handleRemoveSearchActive();
                            handlePageScroll();
                        }}><Link to='/shop'>Kitchen</Link></li>
                        <li onClick={() => {
                            handleCategoryClick('Lamp');
                            handleRemoveSearchActive();
                            handlePageScroll();
                        }}><Link to='/shop'>Lamp</Link></li>
                    </ul>
                    <form className='w60' onSubmit={handleFormSubmit}>
                        <div className='rel'>
                            <input
                                className='w100'
                                type="text"
                                placeholder='Search Products...'
                                ref={searchRef2}
                                onChange={handleSearchChange2}
                                value={searchFilter2}
                            />
                            {searchFilter2 && <FontAwesomeIcon icon={faClose} className='icon remove' onClick={handleClearSearch2} />}
                            <FontAwesomeIcon onClick={() => {
                                handleFormSubmit();
                                handleRemoveSearchActive();
                                handlePageScroll();
                            }} className='icon search' icon={faSearch} />
                        </div>
                    </form>
                    <FontAwesomeIcon icon={faClose} className='close remove' onClick={() => {
                        handleRemoveSearchActive();
                        handlePageScroll();
                    }} />
                </div>
            </div>
        </div>
    );
}