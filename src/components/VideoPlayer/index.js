//#region 
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Project imports
import Icon from '../Icon';
import http from '../../util/http';

// Styled components
import {
  ButtonExpand,
  ButtonPlay,
  Container,
  MainControls,
  OtherControls,
  PlayBackground,
  PlaybackControls,
  Progress,
  ProgressSlider,
  Quality,
  QualityControl,
  QualityOption,
  QualityOptions,
  Speaker,
  Spinner,
  Time,
  VideoControls,
  VideoPreview,
  VideoSeekbar,
  VideoTimings,
  VolumeControl,
  VolumeProgress,
  VolumeSeekbar,
  VolumeSlider
} from './styles'
//#endregion

// Component
function VideoPlayer({ fileName }) {
  const videoPlayerRef = useRef()
  const videoRef = useRef()
  const videoSeekbarRef = useRef()
  const volumeSeekBarRef = useRef()
  const [sources, setSources] = useState([])
  const [source, setSource] = useState({})
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasSound, setHasSound] = useState(true)
  const [currentTime, setCurrentTime] = useState('00:00') 
  const [currentPercentageTime, setCurrentPercentageTime] = useState(0)
  const [previousCurrentTime, setPreviousCurrentTime] = useState(0)
  const [endTime, setEndTime] = useState('00:00')
  const [isExpanded, setIsExpanded] = useState(false)
  const [showQualityOptions, setShowQualityOptions] = useState(false)
  const [showVolumeSeekbar, setShowVolumeSeekbar] = useState(false)
  const [showVideoControls, setShowVideoControls] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [volumeValue, setVolumeValue] = useState(1);
  const [volumePercentage, setVolumePercentage] = useState(100);

  useEffect(() => {
    const getS3Link = async () => {
      // try {
      //   const response = await http({
      //     method: 'get',
      //     url: `/v1/presign/${fileName}?method=GET&source=assignment`
      //   })

        const urls = [
          { url: "https://vjs.zencdn.net/v/oceans.mp4?480", size: 'SD' },
          { url: "https://vjs.zencdn.net/v/oceans.mp4?1080", size: 'HD' },
          { url: "https://vjs.zencdn.net/v/oceans.mp4?2160", size: '4K' }
        ]

        setSources(urls)

        setSource(urls[0])  
      // } catch (e) {
      //   console.error(e)
      // }
    }
    getS3Link()
  }, [fileName])

  function onPlay() {
    setIsPlaying(!isPlaying)
    
    setEndTime(getTime(videoRef.current.duration))

    if (isPlaying) videoRef.current.pause()
    else videoRef.current.play()
  }

  function onFullScreen() {
    setIsExpanded(!isExpanded)
    
    videoRef.current.requestFullscreen()
  }

  function formatValue(value) {
    if (value > -10 && value < 10)
      return '0' + value
    else
      return value
  }

  function getTime(time) {
    const seconds = parseInt(time % 60);
    const minutes = parseInt((time % 3600) / 60);
    const hours = parseInt(time / 3600);

    return hours ? `${formatValue(hours)}:` : ''  + 
      `${formatValue(minutes)}:${formatValue(seconds)}`
  }

  function handleTimeUpdate() {
    const { currentTime: time, duration} = videoRef.current

    setCurrentTime(getTime(time))

    setCurrentPercentageTime(time / duration * 100)
  }

  function handleSeekBar(event) {
    const tempSeekPosition = event.pageX - videoPlayerRef.current.offsetLeft - videoSeekbarRef.current.offsetLeft;

    const tempSeekValue = tempSeekPosition / videoSeekbarRef.current.clientWidth;

    setCurrentPercentageTime(videoRef.current.currentTime / videoRef.current.duration * 100)

    videoRef.current.currentTime = tempSeekValue * videoRef.current.duration;
  };

  function setQuality(item) {
    const hasMoreSizes = sources.length > 1
    
    if (hasMoreSizes) {
      setIsLoading(true)
      
      setPreviousCurrentTime(videoRef.current.currentTime)
  
      setSource(item)
    }
  }

  
  function handleNewStart() {
    if (isLoading) {
      setCurrentTime(getTime(previousCurrentTime))
      
      setCurrentPercentageTime(previousCurrentTime / videoRef.current.duration * 100)
      
      videoRef.current.currentTime = previousCurrentTime
      
      setIsLoading(false)
      
      videoRef.current.play()
      
      setIsPlaying(true)
    }
  }

  function toggleVolume() {
    videoRef.current.volume = hasSound ? 0 : volumeValue;
    
    setHasSound(!hasSound)
  }

  function handleVolumeSeekbar(event) {
    const tempVolumePosition = event.pageX - videoPlayerRef.current.offsetLeft - 
      volumeSeekBarRef.current.offsetLeft;
    
    const percentageDifference = 0.15

    const tempVolumeValue = (tempVolumePosition / volumeSeekBarRef.current.clientWidth)
      - percentageDifference;

    setVolumeValue(tempVolumeValue)
    
    videoRef.current.volume = tempVolumeValue > 1 ? Math.floor(tempVolumeValue) : (
      tempVolumeValue < 0 ? 0 : tempVolumeValue
    );

    const actualVolumePercentage = Math.round(tempVolumeValue * 100)

    setVolumePercentage(actualVolumePercentage)

    setHasSound(actualVolumePercentage >= 1)
  }

  // render
  return (
    <Container
      ref={videoPlayerRef}
      onMouseEnter={() => setShowVideoControls(true)}
      onMouseLeave={() => setShowVideoControls(false)}
    >
      <PlayBackground onClick={onPlay} />
      
      <VideoControls className={showVideoControls ? 'show' : ''}>
        {isLoading && <Spinner />}

        <PlaybackControls>
          <MainControls>
            <ButtonPlay onClick={onPlay}>
              <Icon name={isPlaying ? 'pause2' : 'play3'} />
            </ButtonPlay>
            
            <VideoTimings>
              <Time>{currentTime} / {endTime}</Time>
            </VideoTimings>
          </MainControls>

          <OtherControls>
            <VolumeControl
              onMouseEnter={() => setShowVolumeSeekbar(true)}
              onMouseLeave={() => setShowVolumeSeekbar(false)}
            >
              <VolumeSeekbar
                ref={volumeSeekBarRef}
                className={showVolumeSeekbar ? 'show' : ''}
              >
                <VolumeSlider
                  value={volumePercentage}
                  hasSound={hasSound}  
                />

                <VolumeProgress
                  onClick={handleVolumeSeekbar}
                  value={volumePercentage}
                  hasSound={hasSound}  
                />
              </VolumeSeekbar>

              <Speaker
                onClick={toggleVolume}
                name={hasSound ? 'volume-high' : 'volume-mute2' }
              />
            </VolumeControl>

            <QualityControl
              onMouseEnter={() => setShowQualityOptions(true)}
              onMouseLeave={() => setShowQualityOptions(false)}
            >
              <QualityOptions className={showQualityOptions ? 'show' : ''}>
                {sources.map(item => (
                  <QualityOption
                    key={item.size}
                    className={item.size === source.quality ? 'active' : ''}
                    onClick={() => setQuality(item)}
                  >
                    {item.size}
                  </QualityOption>  
                ))}
              </QualityOptions>

              {source.size && <Quality>{source.size}</Quality>}
            </QualityControl>

            <ButtonExpand onClick={onFullScreen}>
              <Icon name={isExpanded ? 'shrink' : 'enlarge'} size="16px" />
            </ButtonExpand>
          </OtherControls>
        </PlaybackControls>
        
        <VideoSeekbar ref={videoSeekbarRef}>
          <ProgressSlider value={currentPercentageTime} />

          <Progress onClick={handleSeekBar} value={currentPercentageTime} />
        </VideoSeekbar>
      </VideoControls>
      
      <VideoPreview
        ref={videoRef}
        src={source.url}
        onTimeUpdate={handleTimeUpdate}
        onCanPlay={handleNewStart}
      />
    </Container>
  )
}

VideoPlayer.propTypes = {
  fileName: PropTypes.string
}

VideoPlayer.defaultProps = {
  fileName: ''
}

export default VideoPlayer
