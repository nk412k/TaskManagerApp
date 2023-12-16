import {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {
  Modal,
  Button,
  ToastAndroid,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native'

import {
  AddTaskButtonContainer,
  AddTaskInput,
  ButtonsContainer,
  ModalContainer,
  ModalImage,
} from './styledComponents'

interface Props {
  shouldShowInputModal: boolean
  setShouldShowInputModal: Dispatch<SetStateAction<boolean>>
  onAddTask: (value: string) => void
}

const AddTaskModal = (props: Props) => {
  const {shouldShowInputModal, setShouldShowInputModal, onAddTask} = props

  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (shouldShowInputModal) {
      setInputValue('')
    }
  }, [shouldShowInputModal])

  const onClickCloseButton = () => {
    setShouldShowInputModal(false)
  }

  const onClickAddTaskButton = () => {
    if (inputValue === '') {
      ToastAndroid.show('Task name cannot be empty', ToastAndroid.SHORT)
    } else {
      onAddTask(inputValue)
      setInputValue('')
      setShouldShowInputModal(false)
    }
  }

  const onChangeInput = (value: string) => {
    setInputValue(value)
  }

  return (
    <Modal visible={shouldShowInputModal} animationType="slide">
      <ModalContainer>
        <ModalImage source={require('../../../assets/goal.png')} />
        <AddTaskInput
          onChangeText={onChangeInput}
          placeholder="Enter your task"
          value={inputValue}
        />
        <ButtonsContainer>
          <Button title="Close" onPress={onClickCloseButton} color="#f31282" />
          <AddTaskButtonContainer>
            <Button
              title="Add Task"
              onPress={onClickAddTaskButton}
              color="#b180f0"
            />
          </AddTaskButtonContainer>
        </ButtonsContainer>
      </ModalContainer>
    </Modal>
  )
}

export default AddTaskModal
