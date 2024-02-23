import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './select.css'
import { useEffect, useRef, useState } from 'react'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function CustomSelect({ options, handleSortChange }) {
    const select = useRef()
    const [open, setOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)

    useEffect(() => {
        const savedOption = JSON.parse(localStorage.getItem('selectedoption'))
        if(savedOption){
            setSelectedOption(savedOption)
            handleSortChange(savedOption)
        }
        const handler = (e) =>{
            if(!select.current.contains(e.target)){
                setOpen(false)
            }
        }
        window.addEventListener('mousedown',handler)
        return () =>{
            window.removeEventListener('mousedown',handler)
        }
    }, [])

    const handleSelectClick = (el) => {
        setSelectedOption(el)
        handleSortChange(el)
        localStorage.setItem('selectedoption', JSON.stringify(el))
    }
    return (
        <div ref={select} className="select-option rel" onClick={() => setOpen(!open)}>
            {selectedOption && selectedOption.value}
            <FontAwesomeIcon className='select-icon' icon={open ? faChevronDown : faChevronUp} />
            <ul className="select-parent">
                {open &&
                    options.map(el => (
                        <li
                            key={el.id}
                            className={(selectedOption && selectedOption.id === el.id) ? 'selected' : ''}
                            onMouseEnter={(e) => e.target.classList.add('selected-hover')}
                            onMouseLeave={(e) => e.target.classList.remove('selected-hover')}
                            onClick={() => handleSelectClick(el)}
                        >
                            {el.value}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}