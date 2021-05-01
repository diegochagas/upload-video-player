import styled from 'styled-components';

import Text from 'components/Text'

import { colors } from 'styles/theme';
import { mediaQuery } from 'styles/responsive';

export const FileLoading = styled.div`
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;
  background: ${colors.grayLighter};
  width: 100%;
`

export const Progress = styled.div`
  height: 4px;
  width: 128px;
  position: relative;
  overflow: hidden;
  background-color: ${colors.grayLight};
  border-radius: 16px;

  @media ${mediaQuery.minMd} {
    top: 0;
  }

  &:before {
    display: block;
    position: absolute;
    content: '';
    width: ${props => props.value ? `${props.value}%` : '0%'};
    height: 4px;
    background-color: ${colors.brandPrimary};
  }
`;


export const ContainerLoading = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContainerLoadingDetails = styled.div`
  display: flex;
  align-items: center;
`

export const LoadingText = styled(Text).attrs({ type: 'P2' })`
  font-size: 12px;
  margin-left: 8px;
`
