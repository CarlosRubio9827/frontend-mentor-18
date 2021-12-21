
import { AppUI } from './AppUI'
import { Provider } from './Context'
import './App.scss';

function App() {
  return (
    <Provider>
      <div className="main">
        <AppUI />
      </div>
    </Provider>
  );
}

export { App };
  