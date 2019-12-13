import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  color: #102a43;
  font-size: 18px;
  margin-right: 1rem;
  padding: 10px 15px;
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #2d2d2d;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }

  &::before {
    top: 0;
    transform-origin: center right;
  }

  &:hover::before {
    transform-origin: center left;
    transform: scaleX(1);
  }

  &::after {
    bottom: 0;
    transform-origin: center left;
  }

  &:hover::after {
    transform-origin: center right;
    transform: scaleX(1);
  }
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
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

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
