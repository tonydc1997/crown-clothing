import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import './shop.styles.scss';

const ShopPage = ({ collections }) => (
  <div className="shop">
    <CollectionsOverview />
  </div>
);

export default ShopPage;
