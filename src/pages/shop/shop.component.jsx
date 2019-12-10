import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './shop.styles.scss';

class ShopPage extends React.Component {
  render() {
    const { collections } = this.state;
    return (
      <div className="shop">
        {collections.map(({ id, title, items }) => (
          <CollectionPreview key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
