import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background: hsl(210, 36%, 99%);
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  position: sticky;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    padding-bottom: 60px;
    margin: unset;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  left: 68px;
  width: 70px;
  padding: 4px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 37.5%;
    bottom: 16px;
    width: 70%;
    height: 2px;
    background-color: hsl(211, 39%, 23%);
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: translate(-50%, 0) scaleX(1);
  }

  @media screen and (max-width: 800px) {
    left: 12px;
    top: 0;
    width: 50px;
    height: 100%;

    &::before {
      top: 50px;
    }
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 6px;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
    margin-top: 32px;
  }
`;

export const OptionLink = styled(NavLink)`
  cursor: pointer;
  color: hsl(210, 22%, 49%);
  font-size: 14px;
  font-weight: bold;
  padding: 24px 16px;
  position: relative;
  transition: all 0.3s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 16px;
    left: 50%;
    width: 70%;
    height: 2px;
    opacity: 0;
    background-color: hsl(209, 34%, 30%);
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover,
  &.selected-overline {
    color: hsl(211, 39%, 23%);
  }

  &:hover::before,
  &.selected-overline::before {
    transform: translate(-50%, 0) scaleX(1);
    opacity: 1;
  }
`;
