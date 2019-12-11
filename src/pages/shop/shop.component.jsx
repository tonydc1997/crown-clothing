import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component';
import './shop.styles.scss';

const ShopPage = ({ match }) => (
  <div className="shop">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
  </div>
);

export default ShopPage;
