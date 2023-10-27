import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;
export const Item = styled.li`
  align-items: center;
  background-color: rgba(255, 69, 0, 0.5);
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 10px;
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
`;
export const LinkDetails = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 1px;

  &:hover,
  &:focus {
    color: #064e8a;
  }
`;
export const ImgFilm = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
`;
