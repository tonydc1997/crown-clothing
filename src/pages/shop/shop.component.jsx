import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import './shop.styles.scss';

const ShopPage = () => (
  <div className="shop">
    <CollectionsOverview />
  </div>
);

export default ShopPage;
