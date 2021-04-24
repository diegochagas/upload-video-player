import cloeImg from 'img/cloe.svg'
import { mediaQuery } from 'styles/responsive'
import styled from 'styled-components'

export const CloeLogo = styled.img.attrs({ src: cloeImg, alt: 'Camino Learning Platform' })`
  width: auto;
  height: 16px;
  cursor: pointer;
`

export const TopBar = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  padding: 0 24px;
  background: white;
  @media ${mediaQuery.minMd} {
    display: none;
  }
`
export const WrapperHeader = styled.div`
  display: flex;
`