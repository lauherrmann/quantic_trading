import Header from './components/Header/index.jsx';
import { Outlet } from 'react-router-dom';
import './styles.css';
//import Footer from './components/Footer/index.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

