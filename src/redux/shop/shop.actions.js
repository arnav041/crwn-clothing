import { ShopActionTypes } from './shop.types';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START,
})

export const fetchCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})
