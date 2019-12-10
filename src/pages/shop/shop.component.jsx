import React from 'react';
import { connect } from 'react-redux';
import './shop.styles.scss';

const ShopPage = ({ collections }) => <div className="shop"></div>;

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
