export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_DATA_DISH':
            return {...state, dishes: action.payload};
        case 'ADD_DATA_ORDERS':
            return {...state, orders: action.payload};
        case 'ADD_DATA_THIS_ORDER':
            return {...state, thisOrder: action.payload};
        case 'ADD_DATA_TO_CREATE_PAGE':
            return {...state, createPage: action.payload};
        case 'ADD_DATA_TO_BILLS':
            return {...state, dishList: action.payload}
        default:
            return state;
    }
}