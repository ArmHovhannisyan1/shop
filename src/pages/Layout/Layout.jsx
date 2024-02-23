import '../../components/LayoutAssets/Layout.css'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Suspense, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { setCategoryFilter1 } from '../../redux/filter/actions'
import React from "react";
import Footer from '../../components/LayoutAssets/Footer'
import HeaderSearch from '../../components/LayoutAssets/HeaderSearch'
import Header from '../../components/LayoutAssets/Header'

export default function Layout() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [load, setLoad] = useState(true)
    const [active, setActive] = useState(false)
    const [searchActive, setSearchActive] = useState(false)
    const menuRef = useRef()
    const headerSearch = useRef()
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    }
    const handleUp = () => {
        window.scrollTo(0, 0);
    }
    const handleActive = () => {
        setActive(true)
    }
    const handleRemoveActive = () => {
        setActive(false)
    }
    const handleSearchActive = () => {
        setSearchActive(true)
    }
    const handleRemoveSearchActive = () => {
        setSearchActive(false)
    }
    // const handleNoPageScroll = () => {
    //     document.body.classList.add('no-scroll')
    // }
    const handlePageScroll = () => {
        document.body.classList.remove('no-scroll')
    }
    const handleCategoryClick = (category) => {
        dispatch(setCategoryFilter1(category))
        navigate('/shop')
    }

    const handleFormSubmit = () => {
        // e.preventDefault();
        navigate('/shop');
        // handleRemoveActive();
    }
    // console.log(searchFilter)
    useEffect(() => {
        // setTimeout(() => {
        setLoad(false)
        // }, 2000)
        const handler = (e) => {
            if (!menuRef.current.contains(e.target) && !headerSearch.current.contains(e.target)) {
                handleRemoveActive()
                handlePageScroll()
            }
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousedown', handler);
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('mousedown', handler);
        }
    }, [menuRef]);
   
    return (
        <>
            <Header
                scrollPosition={scrollPosition}
                handleActive={handleActive}
                // handleNoPageScroll={handleNoPageScroll}
                active={active}
                menuRef={menuRef}
                handleRemoveActive={handleRemoveActive}
                handlePageScroll={handlePageScroll}
                handleCategoryClick={handleCategoryClick}
                handleFormSubmit={handleFormSubmit}
                handleSearchActive={handleSearchActive}
            />
            <HeaderSearch
                searchActive={searchActive}
                headerSearch={headerSearch}
                handleCategoryClick={handleCategoryClick}
                handleRemoveSearchActive={handleRemoveSearchActive}
                handlePageScroll={handlePageScroll}
                handleFormSubmit={handleFormSubmit}
            />
            <main>
                <Suspense fallback={<div id="preload"></div>}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
            <div className={`rel ${scrollPosition > 1000 ? 'block' : 'none'}`}>
                <div className="wrapper fixed-other" onClick={handleUp}>
                    <FontAwesomeIcon icon={faAngleDoubleUp} />
                </div>
            </div>
        </>
    )
}