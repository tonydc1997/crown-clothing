import { takeEvery } from 'redux-saga';
import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  yield console.log("I'm being fired...");
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
