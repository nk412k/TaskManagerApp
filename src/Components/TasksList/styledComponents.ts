import {View, FlatList, Pressable, Text} from 'react-native'
import styled from 'styled-components'

export const TaskListContainer = styled(View)`
  flex: 1;
`

export const TaskList = styled(FlatList)`
  margin-top: 10px;
  padding-horizontal: 10px;
`

export const TaskItemContainer = styled(View)`
  background-color: #5e0acc;
  margin-top: 10px;
  border-radius: 6px;
`

export const TaskItem = styled(Pressable)`
  padding: 5px 10px;
`

export const TaskText = styled(Text)`
  color: white;
`
