const filters =  JSON.parse(localStorage.getItem('filters')) 
const categoryFilter1 = JSON.parse(localStorage.getItem('ctgfilter1'))
const searchFilter1 = JSON.parse(localStorage.getItem('srchfilter1'))
const searchFilter2 = JSON.parse(localStorage.getItem('srchfilter2'))
const priceFilter = JSON.parse(localStorage.getItem('pricefilter'))
const brandFilter = JSON.parse(localStorage.getItem('brandfilter'))
const colorFilter = JSON.parse(localStorage.getItem('colorfilter'))
const categoryFilter2 = JSON.parse(localStorage.getItem('ctgfilter2'))
const initialState = {
    categoryFilter1: categoryFilter1 || 'All categories',
    filters: Array.isArray(filters) ? filters : [],
    searchFilter1: searchFilter1 || '',
    searchFilter2: searchFilter2 || '',
    priceFilter: priceFilter,
    brandFilter: brandFilter || [''],
    colorFilter: colorFilter || [''],
    categoryFilter2: categoryFilter2 || [''],
};

export default initialState;