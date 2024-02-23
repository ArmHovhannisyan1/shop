import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setEmptyFilter, setRemoveFilter } from '../../redux/filter/actions';

export default function CategoryItem({ el }) {
  // console.log(el)
  const dispatch = useDispatch()
  return (
    <div className='category-container'>
      <ul className='row f-wrap'>
        {el.map((item, index) => {
          return (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => dispatch(setRemoveFilter(item))} type='button'>
                <FontAwesomeIcon icon={faClose}/>
              </button>
            </li>
          )
        })}
        <li>
          <span onClick={() => dispatch(setEmptyFilter())}>Reset</span>
        </li>
      </ul>
    </div>
  );
}
