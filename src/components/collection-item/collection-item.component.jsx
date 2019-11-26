import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';
import { dispatch } from '../../../../../../../Library/Caches/typescript/3.6/node_modules/rxjs/internal/observable/pairs';

const CollectionItem = ({ id, name, imageUrl, price }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted>ADD TO CART</CustomButton>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default CollectionItem;
