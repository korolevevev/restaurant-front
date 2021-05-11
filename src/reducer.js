export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_DATA_DISH':
            return {...state, cars: action.payload};
        case 'ADD_DATA_ORDERS':
            return {...state, orders: action.payload};
        case 'ADD_DATA_ONE_SHOWROOM':
            return {...state, oneShowRoom: action.payload};
        case 'ADD_DATA_TO_CREATE_PAGE':
            return {...state, createPage: action.payload};
        case 'ADD_DATA_TO_BILLS':
            return {...state, dishList: action.payload}
        default:
            return state;
    }
}