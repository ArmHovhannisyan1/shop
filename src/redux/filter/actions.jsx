export const setCategoryFilter1 = (category) => {
  return {
    type: 'CATEGORY_FILTER1',
    payload: category,
  }
};

export const setAddFilter = (filter) => {
  return {
    type: 'ADD_FILTER',
    payload: filter,
  }
};

export const setRemoveFilter = (filter) => {
  return {
    type: 'REMOVE_FILTER',
    payload: filter,
  }
};

export const setEmptyFilter = () => {
  return {
    type: 'EMPTY_FILTER'
  }
}

export const setSearchFilter1 = (search) => {
  return {
    type: 'SEARCH_FILTER1',
    payload: search,
  }
};

export const setSearchFilter2 = (search) => {
  return {
    type: 'SEARCH_FILTER2',
    payload: search,
  }
};

export const setPriceFilter = (price) => {
  return {
    type: 'PRICE_FILTER',
    payload: price
  }
}

export const setBrandFilter = (brand) => {
  return {
    type: 'BRAND_FILTER',
    payload: brand
  }
}

export const setColorFilter = (color) => {
  return {
    type: 'COLOR_FILTER',
    payload: color
  }
}

export const setCategoryFilter2 = (category) => {
  return {
    type: 'CATEGORY_FILTER2',
    payload: category
  }
}