export function toggleWishList(product){
    return(
        {
            type: 'TOGGLE_WISHLIST',
            payload: product
        }
    )
}