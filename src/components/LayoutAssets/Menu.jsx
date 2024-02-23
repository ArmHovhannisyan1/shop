import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import WishButton from "../WishSection/WishButton";
import NavBar from "./NavBar";
import { faClose, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFilter1 } from "../../redux/filter/actions";

export default function Menu({
    handleActive,
    handleNoPageScroll,
    scrollPosition,
    active,
    menuRef,
    handleRemoveActive,
    handlePageScroll,
    handleCategoryClick,
    handleFormSubmit,
}) {
    const searchRef1 = useRef();
    const dispatch = useDispatch();
    const searchFilter1 = useSelector(state => state.filter.searchFilter1);

    const handleSearchChange = () => {
        const searchValue = searchRef1.current.value
        dispatch(setSearchFilter1(searchValue))
    }
    const handleClearSearch1 = () => {
        const searchValue1 = searchRef1.current.value = ''
        dispatch(setSearchFilter1(searchValue1))
    }
    return (
        <div className="menu wrapper w100 row f-jCenter">
            <div className="menu-lines tablet" onClick={() => {
                handleActive();
                handleNoPageScroll();
            }}>
                <div className={`row hLine f-jBetween f-aCenter ${scrollPosition > 50 ? 'bg-black' : ''}`}></div>
                <div className={`row hLine f-jBetween f-aCenter ${scrollPosition > 50 ? 'bg-black' : ''}`}></div>
                <div className={`row hLine f-jBetween f-aCenter ${scrollPosition > 50 ? 'bg-black' : ''}`}></div>
            </div>
            <div className={`desktop ${active ? 'active' : 'close'}`} ref={menuRef}>
                <FontAwesomeIcon icon={faClose} className='tablet close remove' onClick={() => {
                    handleRemoveActive();
                    handlePageScroll();
                }} />
                <div className="search-wrapper tablet f-column">
                    <h3 className='m-center'>Searching</h3>
                    <ul className="search-ctgs">
                        <li onClick={() => {
                            handleCategoryClick('All categories');
                            handleRemoveActive();
                            handlePageScroll();
                        }}><Link to='/shop'>All categories</Link></li>
                        <li onClick={() => {
                            handleCategoryClick('Bedroom');
                            handleRemoveActive();
                            handlePageScroll();
                        }}><Link to='/shop'>Bedroom</Link></li>
                        <li onClick={() => {
                            handleCategoryClick('Decor');
                            handleRemoveActive();
                            handlePageScroll();
                        }}><Link to='/shop'>Decor</Link></li>
                        <li onClick={() => {
                            handleCategoryClick('Outdoor');
                            handleRemoveActive();
                            handlePageScroll();
                        }}><Link to='/shop'>Outdoor</Link></li>
                        <li onClick={() => {
                            handleCategoryClick('Kitchen');
                            handleRemoveActive();
                            handlePageScroll();
                        }}><Link to='/shop'>Kitchen</Link></li>
                        <li onClick={() => {
                            handleCategoryClick('Lamp');
                            handleRemoveActive();
                            handlePageScroll();
                        }}><Link to='/shop'>Lamp</Link></li>
                    </ul>
                    <form onSubmit={handleFormSubmit}>
                        <div className='rel'>
                            <input className='w100' type="text" placeholder='Search Products...' ref={searchRef1} onChange={handleSearchChange} value={searchFilter1} />
                            {searchFilter1 && <FontAwesomeIcon icon={faClose} className='icon remove' onClick={handleClearSearch1} />}
                            <FontAwesomeIcon onClick={e => {
                                handleFormSubmit(e);
                                handleNoPageScroll()
                            }} className='icon search' icon={faSearch} />
                        </div>
                    </form>
                </div>
                <NavBar
                    handleRemoveActive={handleRemoveActive}
                    handlePageScroll={handlePageScroll}
                    handleCategoryClick={handleCategoryClick}
                />
                <div className="icon-parent">
                    <Link onClick={() => {
                        handleRemoveActive();
                        handlePageScroll();
                    }} className='tablet' to='/register'>
                        Login/register
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <Link onClick={() => {
                        handleRemoveActive();
                        handlePageScroll();
                    }} className='tablet' to='/wish'>
                        WishList
                        <WishButton />
                    </Link>
                </div>
            </div>
        </div>
    );
}