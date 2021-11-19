import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Container = styled.div<{ background: string}>`
  min-width: 318px;
  min-height: 144px;
  height: 160px;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ background }) => background};
`;

export const Title = styled.p`
  font-size: 22px;
  color: ${colors.white01};
  font-weight: bold;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 17px;
  color: ${colors.grey02};
  margin: 0;

`;

export const Date = styled.p`
  font-size: 12px;
  color: ${colors.grey02};
  margin: 0;

`;
