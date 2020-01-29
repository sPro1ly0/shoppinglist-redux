import { ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM } from '../constants/action-types';

const initialState = [
        {
            id: 0,
            name: 'chocolate',
            completed: false
        },
        {
            id: 1,
            name: 'carrots',
            completed: false
        }
];

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state, {
                    id: action.id,
                    name: action.name,
                    completed: false
                }
            ]
        case TOGGLE_ITEM:
            return state.map(item => {
                if (item.id !== action.id) {
                    return item;
                }
                return {
                    ...item,
                    completed: !item.completed
                };
            }
        )
        case DELETE_ITEM:
            return state.filter(item => item.id !== action.id);
        default: 
            return state;
    }

   
};



export default rootReducer;