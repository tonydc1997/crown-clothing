import React from 'react';
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
