import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background: hsl(210, 36%, 99%);
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  text-align: center;
  height: 58%;
  left: 3.5rem;
  top: 0.5rem;
  width: 70px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50.5%;
    bottom: -8px;
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
    left: 1rem;
    top: 0;
    width: 50px;
    height: 100%;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 4px;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
    margin-top: 32px;
  }
`;

export const OptionLink = styled(Link)`
  color: hsl(209, 34%, 30%);
  font-size: 16px;
  font-weight: 700;
  margin-right: 1rem;
  padding: 10px 15px;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    font-size: 15px;
  }

  @media screen and (min-width: 401px) and (max-width: 800px) {
    font-size: 16px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 50%;
    width: 70%;
    height: 2px;
    opacity: 0;
    background-color: hsl(209, 34%, 30%);
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    transform: translate(-50%, 0) scaleX(1);
    opacity: 1;
  }

  &:hover {
    color: hsl(211, 39%, 23%);
  }
`;
