import initialState from './state'
import isEqual from 'lodash/isEqual'

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CATEGORY_FILTER1':
      localStorage.setItem('ctgfilter1', JSON.stringify(action.payload))
      return {
        ...state,
        categoryFilter1: action.payload,
      };
    case 'ADD_FILTER': {
      const category = action.payload;
      let newState = [...state.filters];
      let elID = newState.indexOf(category);
      if (elID !== -1) {
        newState.splice(elID, 1);
      } else {
        newState.push(category);
      }
      localStorage.setItem('filters', JSON.stringify(newState));
      return {
        ...state,
        filters: [...newState],
      };
    }
    case 'REMOVE_FILTER': {
      const { payload: categoryFilter1, payload: brandFilter, payload: colorFilter, payload: categoryFilter2 } = action;
      const newState = state.filters.filter((item) => item !== categoryFilter1);
      const newBrandState = state.brandFilter.filter((item) => item !== brandFilter);
      const newColorState = state.colorFilter.filter((item) => item !== colorFilter);
      const newCategoryState = state.categoryFilter2.filter((item) => item !== categoryFilter2);
      localStorage.setItem('filters', JSON.stringify(newState));
      localStorage.setItem('brandfilter', JSON.stringify(newBrandState));
      localStorage.setItem('colorfilter', JSON.stringify(newColorState));
      localStorage.setItem('ctgfilter2', JSON.stringify(newCategoryState));

      return {
        ...state,
        filters: [...newState],
        brandFilter: [...newBrandState],
        colorFilter: [...newColorState],
        categoryFilter2: [...newCategoryState]
      };
    }
    case 'EMPTY_FILTER': {
      const newState = [];
      localStorage.setItem('filters', JSON.stringify(newState));
      localStorage.setItem('brandfilter', JSON.stringify(newState));
      localStorage.setItem('colorfilter', JSON.stringify(newState));
      localStorage.setItem('ctgfilter2', JSON.stringify(newState));
      return {
        ...state,
        filters: [...newState],
        brandFilter: [...newState],
        colorFilter: [...newState],
        categoryFilter2: [...newState],
      };
    }
    case 'BRAND_FILTER': {
      const brandFilter = Array.isArray(action.payload) ? action.payload : [action.payload];
      const updatedFilters = [...state.brandFilter, ...brandFilter]

      localStorage.setItem('brandfilter', JSON.stringify(updatedFilters));

      return {
        ...state,
        brandFilter: updatedFilters,
      };
    }
    case 'COLOR_FILTER': {
      const colorFilter = Array.isArray(action.payload) ? action.payload : [action.payload];
      const updatedFilters = [...state.colorFilter, ...colorFilter]
      localStorage.setItem('colorfilter', JSON.stringify(updatedFilters))
      return {
        ...state,
        colorFilter: updatedFilters
      }
    }
    case 'CATEGORY_FILTER2': {
      const categoryFilter2 = Array.isArray(action.payload) ? action.payload : [action.payload];
      const updatedFilters = [...state.categoryFilter2, ...categoryFilter2]

      localStorage.setItem('ctgfilter2', JSON.stringify(updatedFilters))
      return {
        ...state,
        categoryFilter2: updatedFilters
      }
    }
    case 'SEARCH_FILTER1': {
      localStorage.setItem('srchfilter1', JSON.stringify(action.payload))
      return {
        ...state,
        searchFilter1: action.payload,
      };
    }
    case 'SEARCH_FILTER2': {
      localStorage.setItem('srchfilter2', JSON.stringify(action.payload))
      return {
        ...state,
        searchFilter2: action.payload,
      };
    }
    case 'PRICE_FILTER': {
      localStorage.setItem('pricefilter', JSON.stringify(action.payload))
      return {
        ...state,
        priceFilter: action.payload
      }
    }

    default:
      return state;
  }
};

export default filterReducer;