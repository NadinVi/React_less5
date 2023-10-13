import './App.css';
import TaskContainer from './containers/TaskContainer/TaskContainer';
import { ThemeProvider } from './contexts/theme';
import TaskProvider from './contexts/tasks';
import PanelTheme from './containers/PanelTheme/PanelTheme';

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <PanelTheme>
        </PanelTheme>
        <TaskProvider>
          <TaskContainer />
        </TaskProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
