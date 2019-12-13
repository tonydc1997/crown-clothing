import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoContainer = styled(Link)`
  text-align: center;
  height: 58%;
  left: 3.5rem;
  top: 1rem;
  width: 70px;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #2d2d2d;
    transform: scaleY(0);
    transition: transform 0.5s ease;
  }

  &::before {
    left: -8px;
    transform-origin: center top;
  }

  &:hover::before {
    transform-origin: center bottom;
    transform: scaleY(1);
  }

  &::after {
    right: -8px;
    transform-origin: center bottom;
  }

  &:hover::after {
    transform-origin: center top;
    transform: scaleY(1);
  }
`;
