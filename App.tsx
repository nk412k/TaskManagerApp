import TaskManager from "./src/Components/TaskManager";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <TaskManager />
    </>
  );
}
