import { ADD_ITEM } from '../constants/action-types';

export function addItem(payload) {
    return { type: ADD_ITEM, payload };
};