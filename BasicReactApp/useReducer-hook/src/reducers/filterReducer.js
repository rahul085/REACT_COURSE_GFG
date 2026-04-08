export  const filterReducer=(state,action)=>{
    switch(action.type){
        case 'PRICE':
            return {
                ...state,newPrice:action.payload
            }
        case 'DISCOUNT':
            return {
                ...state,newDiscountPercentage:action.payload
            }
        case 'RATING':
            return {
                ...state,newRating:action.payload
            }
        default:
            return state
            
    }

}