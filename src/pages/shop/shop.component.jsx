import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopItems } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './shop.styles.scss';

const ShopPage = ({ collections }) => (
  <div className="shop">
    {collections.map(({ id, title, items }) => (
      <CollectionPreview key={id} title={title} items={items} />
    ))}
  </div>
);

export default ShopPage;
