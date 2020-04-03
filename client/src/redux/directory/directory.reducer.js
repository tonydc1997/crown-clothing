import hat from '../../assets/images/hat.jpg';
import jacket from '../../assets/images/jacket.jpg';
import sneakers from '../../assets/images/sneakers.jpg';
import woman from '../../assets/images/woman.jpg';
import man from '../../assets/images/man.jpg';

const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: `${hat}`,
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: `${jacket}`,
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: `${sneakers}`,
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: `${woman}`,
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: `${man}`,
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
