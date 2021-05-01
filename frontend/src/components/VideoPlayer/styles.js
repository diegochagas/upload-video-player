import styled, { keyframes } from 'styled-components';

import Icon from '../Icon'

import { colors, fonts } from '../../styles/theme';
import { mediaQuery, breakpoint } from '../../styles/responsive';

const mediumSize = `${breakpoint.md}px`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${colors.white};
  margin: 0 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.black50};
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${mediumSize};
  height: auto;
  margin: 0 auto;
`

export const PlayBackground = styled.div`
  position: absolute;
  width: 100%;
  z-index: 10;
  height: 60%;

  @media ${mediaQuery.minMd} {
    height: 84%;
  }
`

export const VideoPreview = styled.video`
  width: 100% !important;
  height: auto !important;
  margin-bottom: -5px;

  /* &::-webkit-media-controls {
    display:none !important;
  }

  &::-webkit-media-controls-enclosure {
    display:none !important;
  } */
`

export const VideoControls = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${colors.black50};
  height: 100%;
  padding: 20px;
  z-index: 1;
  display: none;
  z-index: 2147483648;

  &.show {
    display: block;
  }

  &:fullscreen {
    position: fixed; 
  }
`

export const PlaybackControls = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 100%;
  align-items: flex-end;
  padding-bottom: 10px;
`

export const MainControls = styled.div`
  display: flex;
  align-items: center;
`

export const OtherControls = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonPlay = styled(Button)`
  margin-left: 0;
`

export const VideoTimings = styled.div`
  color: ${colors.white};
  font-family: ${fonts.textFamily};
  font-size: 14px;

  @media ${mediaQuery.maxSm} {
    font-size: 12px;
  }
`

export const Time = styled.span`

`

export const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  border-radius: 25px;
  padding-left: 10px;
  margin-right: 10px;

  &:hover {
    background-color: ${colors.black50};
  }

  @media ${mediaQuery.maxSm} {
    display: none;
  }
`

export const VolumeSeekbar = styled.div`
  position: relative;
  display: none;
  margin-right: 15px;

  &.show {
    display: block;
  }
`

export const Speaker = styled(Icon)`
  color: ${colors.white};
  cursor: pointer;
  width: 25px;
  height: 25px;
`

export const QualityControl = styled.div`
  position: relative;
  color: ${colors.white};
  font-family: ${fonts.textFamily};
  width: 35px;
  font-size: 14px;
`

export const Quality = styled.div`
  cursor: pointer;
`

export const QualityOptions = styled.div`
  position: absolute;
  display: none;
  bottom: 20px;
  background-color: ${colors.black50};
  width: 100%;

  &.show {
    display: block;
  }
`

export const QualityOption = styled.div`
  cursor: pointer;
  padding: 3px; 
  font-family: ${fonts.textFamily};

  &:hover {
    background-color: ${colors.white20};
  }
  
  &.active {
    background-color: ${colors.white};
    color: ${colors.black85};
  }
`

export const ButtonExpand = styled(Button)`
  margin-right: 0;
`

export const Progress = styled.div`
  height: 4px;
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: ${colors.grayLight};
  border-radius: 16px;
  transition: all ease 0.25s;

  @media ${mediaQuery.minMd} {
    top: 0;
  }

  &:before {
    display: block;
    position: absolute;
    content: '';
    width: ${props => props.value ? `${props.value}%` : '0%'};
    height: 4px;
    background-color: ${colors.white};
  }
  
  &:after {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const ProgressSlider = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  background-color: ${colors.white};
  position: absolute;
  z-index: 2;
  top: -6px;
  border-radius: 50%;
  left: ${props => props.value ? `${props.value}%` : '0%'};
  cursor: pointer;
`

export const VolumeSlider = styled(ProgressSlider)`
  left: ${props => props.value && props.hasSound ? `${props.value}%` : '0%'};
`

export const VolumeProgress = styled(Progress)`
  width: 128px;

  &:before {
    width: ${props => props.value && props.hasSound ? `${props.value}%` : '0%'};
  }
`

export const VideoSeekbar = styled.div`
  position: relative;
`

export const Spinner = styled(Icon).attrs({
  name: 'spinner',
  size: '50px'
})`
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -12px 0 0 -12px;
  color: ${colors.white};
  animation: ${rotate} 1s ease-in infinite;
`