import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  max-width: 1280px;
  padding: 20px;
  width: 100%;
`;
export const Image = styled.img`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px;
  height: auto;
  max-width: 100%;
  min-width: 310px;
  margin-bottom: 15px;
  min-height: 400px;
`;

export const Description = styled.div`
  position: absolute;
  left: 550px;
  top: 55px;
`;
export const LinkTo = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 5px;
  color: black;
  background-color: rgba(255, 69, 0, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  max-width: 200px;
  padding: 15px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  display: flex;
  gap: 5px;
  font-size: 22px;
  &:hover,
  &:focus {
    color: white;
    background-color: orangered;
  }
`;
export const List = styled.ul`
  display: flex;
  gap: 20px;
  text-decoration: none;
`;
export const ListItem = styled.li`
  color: black;
  display: inline-block;
  font-size: 22px;
  width: 150px;
  cursor: pointer;
`;
