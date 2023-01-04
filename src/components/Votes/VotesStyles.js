import styled from '@emotion/styled';
import { Colors } from '../../common/constants/colors';

export const VotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
`;

export const VotesScore = styled.p`
  font-weight: bold;
  color: ${Colors.text};
  margin: 0;
  font-size: 16px;
`;
