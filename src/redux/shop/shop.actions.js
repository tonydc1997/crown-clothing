import ShopActiontypes from './shop.types';

export const fetchCollectionsStart = () => ({
  type: ShopActiontypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  };
};
