export const cartReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state, cart:[...state.cart,action.payload]
            }
        case "REMOVE":
            return {
                ...state,
                cart: state.cart.filter(product=>product.id!==action.payload.id)
            }
        default:
            return state;
    }

}