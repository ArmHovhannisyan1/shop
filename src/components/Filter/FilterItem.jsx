import { useDispatch, useSelector } from "react-redux";
import { setAddFilter, setBrandFilter, setCategoryFilter2, setColorFilter, setRemoveFilter } from "../../redux/filter/actions";

export default function FilterItem({ title, items, filterType }) {
  const filters = useSelector(state => state.filter.filters)
  const brandFilter = useSelector(state => state.filter.brandFilter)
  const colorFilter = useSelector(state => state.filter.colorFilter)
  const categoryFilter2 = useSelector(state => state.filter.categoryFilter2)
  // console.log(categoryFilter2)
  const dispatch = useDispatch();
  const handleItemsClick = (item) => {
    dispatch(setAddFilter(item))
  }
  
  const handleFilterClick = (item) => {
    if (filterType === 'color') {
      dispatch(setColorFilter(item))
    } else if (filterType === 'brand') {
      dispatch(setBrandFilter(item))
    } else if(filterType === 'category'){
      dispatch(setCategoryFilter2(item))
    }
  }
  return (
    <div className="wrapper w25">
      <h4 className="row f-aCenter">
        {title}
        {/* {categoryFilter2.length > 0 &&
          <p onClick={() => dispatch(setEmptyCategoryFilter2())}>Reset</p>
        } */}
      </h4>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              if (brandFilter.includes(item) || colorFilter.includes(item) || categoryFilter2.includes(item)) {
                dispatch(setRemoveFilter(item))
              } else {
                handleItemsClick(item)
                handleFilterClick(item)
              }
            }}>
            <input
              type="checkbox"
              checked={filters.includes(item)}
              style={{
                background: item,
                color: (item === 'Black') ? "white" : '',
              }}
              className="check-input"
              onChange={() => { }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}