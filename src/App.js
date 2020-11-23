import logo from './logo.svg';
import './App.css';
import ParentComp from './HookComponents/UseCallback/ParentComp';
import UseMemoHook from './HookComponents/UseMemoHook';
import ParentElement from './HookComponents/CostomHook/ParentElement';
import SubparentElement from './HookComponents/CostomHook/SubparentElement';
import UseStateHook from './HookComponents/UseStateHook';
import ReactRouterModule from './pages/ReactRouterModule';
function App() {
  return (
    <div className="App">
      <ReactRouterModule/>

    </div>
  );
}

export default App;
