import styled from '@emotion/styled';
import { Colors } from '../../common/constants/colors';

export const CommentWrapper = styled.div`
  background-color: ${Colors.background};
  margin: 8px 0;
  padding: 16px;
  transition: box-shadow 0.1s ease-in;
  border-radius: 4px;
  color: ${Colors.text};
`;

export const Metadata = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
`;

export const Author = styled.p`
  font-weight: bold;
  color: ${Colors.author};
`;

export const Time = styled.p`
  margin-left: auto;
  font-style: italic;
`;
