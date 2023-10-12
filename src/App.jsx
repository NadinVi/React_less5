import './App.css';
import PanelContainer from './containers/PanelContainer/PanelContainer';
import TaskContainer from './containers/TaskContainer/TaskContainer';
import { ThemeProvider } from './contexts/theme';
import TaskProvider from './contexts/tasks';

function App() {

  return (
    <div className="App">
      <ThemeProvider>
      <PanelContainer>
      </PanelContainer>
      <TaskProvider>
        <TaskContainer />
      </TaskProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
