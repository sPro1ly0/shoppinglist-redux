import { ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM } from '../constants/action-types';

let itemId = 2

export function addItem(name) {
    return { type: ADD_ITEM, id: itemId++, name };
};

export function toggleItem(id) {
    return { type: TOGGLE_ITEM, id: id };
};

export function deleteItem(id) {
    return { type: DELETE_ITEM, id: id }
};