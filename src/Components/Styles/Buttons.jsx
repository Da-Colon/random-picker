import styled from 'styled-components'

export const XButton = styled.button`
  padding: 4px;
  font-weight: 900;
  color: rgb(100,69,159);
  border-radius: 12px;
`

export const RandomButton = styled.button`
  padding: 12px;
  font-size: 1.1rem;
  margin: 32px;
  font-weight: 900;
  border-radius: 12px;
  background-color: rgba(200,150,200,0.7);

  :hover {
    transform: scale(1.2)
  }
`

export const ToggleSidebarButton = styled.div`
  height: 100px;
  width: 12px;
  float: right;
  background-color: grey;
`

export const BottomContainer = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 55px;
  border: 2px solid black;
  display: flex;
  justify-content: space-around;
`

export const TheBottomButtons = styled.button`
  width: 50%;
  border-right: 2px solid;
  border-left: 2px solid;
`