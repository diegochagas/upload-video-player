import React from 'react';

import Icon from 'components/Icon'

import { 
  Progress,
  ContainerLoading,
  ContainerLoadingDetails,
  FileLoading,
  LoadingText
 } from './styles';

function ProgressBar({ color, text, percent }) {
  return (
    <FileLoading>
      <ContainerLoading>
        <ContainerLoadingDetails>
          <Icon name="attachment" color={color} size="16" />

          <LoadingText>{`${text.substr(0, 30)}${text.length > 30 ? '...' : ''}`}</LoadingText>
        </ContainerLoadingDetails>

        <ContainerLoadingDetails> 
          <Progress value={percent} />

          <LoadingText>{`${percent}%`}</LoadingText>
        </ContainerLoadingDetails>
      </ContainerLoading>
    </FileLoading>
  );
}

export default ProgressBar;