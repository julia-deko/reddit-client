import styled from '@emotion/styled';
import { Colors } from '../../common/constants/colors';

export const Icon = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const SubredditButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: ${Colors.textSecondary};
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  &:hover {
    background-color: ${Colors.onHover};
  }
`;
