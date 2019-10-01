import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import hat from '../../images/hat.jpg';
import jacket from '../../images/jacket.jpg';
import shoes from '../../images/sneakers.jpg';
import man from '../../images/man.jpg';
import woman from '../../images/woman.jpg';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
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
          imageUrl: `${shoes}`,
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
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory__menu">
        {sections.map(({ id, title, imageUrl, size, linkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
