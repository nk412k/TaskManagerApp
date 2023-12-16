import {useState} from 'react'
import {Button} from 'react-native'

import TasksList from '../TasksList'
import AddTaskModal from '../AddTaskModal'

import {MainView} from './styledComponents'

const TaskManager = () => {
  const [tasksList, setTasksList] = useState([])
  const [shouldShowInputModal, setShouldShowInputModal] = useState(false)

  const onClickAddTaskButton = () => {
    setShouldShowInputModal(true)
  }

  const onAddTask = (value: string) => {
    const taskItem = {
      id: (Math.random() * 100).toString(),
      title: value,
    }
    setTasksList([...tasksList, taskItem])
  }

  return (
    <MainView>
      <AddTaskModal
        shouldShowInputModal={shouldShowInputModal}
        setShouldShowInputModal={setShouldShowInputModal}
        onAddTask={onAddTask}
      />
      <Button
        title="Add New Task"
        onPress={onClickAddTaskButton}
        color="#a065ec"
      />
      <TasksList tasksList={tasksList} setTasksList={setTasksList} />
    </MainView>
  )
}

export default TaskManager
