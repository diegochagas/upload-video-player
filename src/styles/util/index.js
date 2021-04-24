// Project imports

import classBackground from 'img/class-background-1.svg'
import classBackground2 from 'img/class-background-2.svg'
import classBackground3 from 'img/class-background-3.svg'
import classBackground4 from 'img/class-background-4.svg'
import { colors } from '../theme'

export const ellipsis = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const getPatternBackgroundBasedOnStep = step => {
  let bg
  const n = +step % 4
  if (n === 1) {
    bg = classBackground
  } else if (n === 2) {
    bg = classBackground2
  } else if (n === 3) {
    bg = classBackground3
  } else {
    bg = classBackground4
  }
  return `background-image: url(${bg});`
}

export const getFamilyActivityColor = gradeId => {
  if (+gradeId === 19) return colors.rainbow1
  if (+gradeId === 20) return colors.rainbow2
  if (+gradeId === 21) return colors.rainbow3
  return colors.rainbow0
}

export const addTouchScroll = (direction = 'horizontal') => {
  const overflowProp = direction === 'vertical'
    ? 'overflow-y'
    : 'overflow-x'

  return `
    ${overflowProp}: scroll; /* has to be scroll, not auto */
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  `
}

export const addOverflowFix = (w = 1, h = 1, display = 'block') => `
  &::after {
    /* overflow auto/scroll behavior fix */
    content: '';
    display: ${display};
    flex-shrink: 0;
    width: ${w}px;
    height: ${h}px;
  }
`

export const removeOverflowFix = () => `
  &::after {
    content: none;
  }
`

export function getColorForNumber(num) {
  const numTyped = Number(num)
  if (Number.isNaN(numTyped)) return colors.gray

  const lastDigitFromNum = numTyped % 10
  switch (lastDigitFromNum) {
    case 0:
    case 4:
    case 8:
      return colors.rainbow0
    case 1:
    case 5:
    case 9:
      return colors.rainbow1
    case 2:
    case 6:
      return colors.rainbow2
    case 3:
    case 7:
    default:
      return colors.rainbow3
  }
}

export function lineClamp(num = 3) {
  return `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${num};
    overflow: hidden;
  `
}
