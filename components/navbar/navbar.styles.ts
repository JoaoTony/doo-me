import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Container = styled.nav`
  width: 100%;
  height: 85px;
  background: ${colors.darkBlue};
  padding: 0 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 136px;
  height: auto;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: ${colors.darkBlue01};
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.white01};
  font-size: 20px;
  font-weight: bold;
`;
