import React from 'react';

const MenuItem = ({ title }) => (
  <div className="menu__item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="title__sub">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
