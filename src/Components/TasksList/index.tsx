import React, {Dispatch, SetStateAction} from 'react'
import {TaskItemType} from '../../Stores/types'

import {
  TaskItem,
  TaskItemContainer,
  TaskList,
  TaskListContainer,
  TaskText,
} from './styledComponents'

interface Props {
  tasksList: TaskItemType[]
  setTasksList: Dispatch<SetStateAction<TaskItemType[]>>
}
const TasksList = (props: Props) => {
  const {tasksList, setTasksList} = props

  const onClickTask = (itemData: TaskItemType) => {
    setTasksList(tasksList => tasksList.filter(item => item.id !== itemData.id))
  }

  const renderItem = ({item}: {item: TaskItemType}): React.ReactElement => {
    return (
      <TaskItemContainer>
        <TaskItem
          android_ripple={{color: '#f5f5f598'}}
          onPress={() => onClickTask(item)}
          style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}
        >
          <TaskText>{item.title}</TaskText>
        </TaskItem>
      </TaskItemContainer>
    )
  }

  return (
    <TaskListContainer>
      <TaskList
        data={tasksList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </TaskListContainer>
  )
}

export default TasksList
