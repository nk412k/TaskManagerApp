import styled from 'styled-components'
import {Image, TextInput, View} from 'react-native'

export const ModalContainer = styled(View)`
  background-color: #311b6b;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex: 1;
`

export const AddTaskInput = styled(TextInput)`
  color: #120438;
  background-color: #e4d0ff;
  border-radius: 6px;
  border-color: #e4d0ff;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
`

export const ButtonsContainer = styled(View)`
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
  justify-content: center;
`

export const ModalImage = styled(Image)`
  height: 100px;
  width: 100px;
`

export const AddTaskButtonContainer = styled(View)`
  margin-left: 10px;
`
