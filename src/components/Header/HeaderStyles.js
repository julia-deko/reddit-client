import styled from '@emotion/styled';
import { Colors } from '../../common/constants/colors';

export const HeaderWrapper = styled.div`
  color: ${Colors.author};
  background-color: ${Colors.backgroundSecondary};
  height: 64px;
  padding: 0 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  background: ${Colors.inputBackground};
  border: none;
  padding: 8px 16px;
  height: max-content;
  border-radius: 4px;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${Colors.text};
  font-size: 24px;
`;
