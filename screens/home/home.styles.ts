import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.white01};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 0 20%;
  padding-top:  200px;
`;

export const CardSection = styled.div`
  width: 100%;
  height: auto;


  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const AddTaskMenu = styled.div`
  width: 16px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 20px;

  button:nth-child(1) {
    background: ${colors.red01}
  }

  button:nth-child(2) {
    background: ${colors.blue01}
  }

  button:nth-child(3) {
    background: ${colors.orange01}
  }
`;

export const AddTaskBtn = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: none;
`;
