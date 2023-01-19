import './App.css';
import { Outlet } from 'react-router-dom'
import Navv from './components/Navv';
import Footerr from './components/Footerr';
import { DetailsProvider } from './context/Contextt';
function App() {
  return (
    <div className="App">
      <DetailsProvider>
        <Navv />
        <Outlet />
      </DetailsProvider>

      <Footerr />
    </div>
  );
}

export default App;
