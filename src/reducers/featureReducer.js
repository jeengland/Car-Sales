import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/featureActions'

const initialState = {
    features: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ],
    featureCost: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    }, 
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                features: state.features.filter((feature) => feature.id !== action.payload.feature.id),
                featureCost: state.featureCost + action.payload.feature.price,
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload.feature]
                }
            };
        case REMOVE_FEATURE:
            return state;
        default: 
            return state;
    }
}

export default reducer;